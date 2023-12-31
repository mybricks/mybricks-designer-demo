const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const rootPath = path.resolve(__dirname, './../');
const outputPath = path.resolve(rootPath, './assets');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  output: {
    path: outputPath,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../templates/index.html'),
      chunks: ['index'],
    }),
  ]
});