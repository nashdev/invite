const { withPlugins } = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();

const config = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
};

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[name]__[local]--[hash:base64:5]"
        },
        postcssLoaderOptions: {}
      }
    ]
  ],
  config
);
