const merge = require('webpack-merge');
const cssnano = require('cssnano');
const OptimizeCssAssertsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  plugins: [
    new OptimizeCssAssertsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    })
  ]
};

module.exports = merge(baseConfig, prodConfig);
