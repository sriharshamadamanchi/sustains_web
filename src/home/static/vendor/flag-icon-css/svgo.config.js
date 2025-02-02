// Copyright © 2025 Sustains AI, All Rights Reserved
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIDs: false
        }
      }
    },
    "sortAttrs",
    "removeDimensions",
    "removeStyleElement",
    "removeScriptElement"
  ]
};
