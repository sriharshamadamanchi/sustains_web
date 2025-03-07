// Copyright © 2025 Sustains AI, All Rights Reserved
var gulp = require("gulp"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
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
  return gulp.src("./src/js/hs-video-player.js")
    .pipe(webpackStream({
      mode: "development",
      devtool: "source-map",
      output: {
        library: "HSVideoPlayer",
        libraryTarget: "umd",
        libraryExport: "default",
        filename: "hs-video-player.min.js"
      },
      optimization: {
        minimize: true
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
              presets: [["@babel/preset-env"]]
            }
          }
        ]
      },
      externals: {
        jquery: "jQuery"
      }
    }))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("main-watch", () => {
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass-build"));
  gulp.watch("./src/js/hs-video-player.js", gulp.series("js-build"));
});

// Default Task
gulp.task("default", gulp.series("main-watch"));
