/* eslint-env node */
const config = require('./webpack.config.config.js');
const webpack = require('webpack');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  contentBase: './build',
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {
    "/common/": {
      target: "http://localhost:8234",
      pathRewrite: {"^/common" : ""}
    },
    "/navbar/": {
      target: "http://localhost:8235",
      pathRewrite: {"^/navbar" : ""}
    },
    "/people/": {
      target: "http://localhost:8236",
      pathRewrite: {"^/people" : ""}
    },
  }
}

config.mode = 'development'

module.exports = config;
