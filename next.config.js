const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withImages(
  withSass(
    withCSS({
      distDir: "dist",
      esModule: true,
      webpack: function(config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|jpeg|png|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "[name].[ext]"
            }
          }
        });
        return config;
      }
    })
  )
);
