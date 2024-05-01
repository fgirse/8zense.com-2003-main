const webpack = require("webpack");

module.exports = {
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  entry: "./src/index.js",
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  //...
};
