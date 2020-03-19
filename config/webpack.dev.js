const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const apiMocker = require('mocker-api');
const baseConfig = require('./webpack.base');
const projectRoot = process.cwd();

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(projectRoot, 'dist'),
    before(app) {
      apiMocker(app, path.join(projectRoot, 'mock/index.js'));
    },
    hot: true,
    stats: 'errors-only'
  },
  devtool: 'cheap-source-map'
};

module.exports = merge(baseConfig, devConfig);
