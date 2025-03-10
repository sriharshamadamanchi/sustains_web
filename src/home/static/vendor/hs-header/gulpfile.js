// Copyright © 2025 Sustains AI, All Rights Reserved
var gulp = require("gulp"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
  uglify = require("gulp-uglify"),
  webpack = require("webpack"),
  webpackStream = require("webpack-stream");

gulp.task("sass-build", () => {
  return gulp.src("./src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer(["last 5 versions", "> 1%"], { cascade: true }))
    .pipe(gulp.dest("./src/css"))
    .pipe(gulp.dest("./dist"))
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("./dist"))
});

gulp.task("js-build", () => {
  return gulp.src("./src/js/hs-header.js")
    .pipe(webpackStream({
      mode: "development",
      output: {
        library: "HSHeader",
        libraryTarget: "umd",
        libraryExport: "default",
        filename: "hs-header.js"
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest("./dist/"))
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("./dist/"))
});

gulp.task("main-watch", () => {
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass-build"));
  gulp.watch("./src/js/**/*.js", gulp.series("js-build"));
});

// Default Task
gulp.task("default", gulp.series("main-watch"));
