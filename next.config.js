const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

require("dotenv").config(
  process.env.APP_TYPE === "dev"
    ? {
        path: "./dev.env"
      }
    : { path: "./prod.env" }
);

module.exports = withImages(
  withSass(
    withCSS({
      esModule: false,
      distDir: process.env.NEXT_OUT_DIR,
      webpack: function(config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|jpeg|png|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
              esModule: false,
              name: "[name].[ext]"
            }
          }
        });
        return config;
      }
    })
  )
);
