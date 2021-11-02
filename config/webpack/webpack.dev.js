// const webpack = require('webpack');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common');
// const paths = require('../paths');

const PORT = 3000;

const webpackDevConfig = env => {
  return merge(commonWebpackConfig(env), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      compress: true, // enable gzip compression
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      port: PORT,
      onListening: function () {
        console.log('Listening on port:', PORT);
      }
    }
  });
};

module.exports = webpackDevConfig;
