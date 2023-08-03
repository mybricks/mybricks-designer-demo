const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const rootPath = path.resolve(__dirname, './../')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const fs = require('fs')
const pkg = require('../package.json')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
    },
  },
  devServer: {
    static: {
      directory: path.resolve(rootPath, './assets'),
    },
    port: 8002,
    host: 'localhost',
    hot: true,
    client: {
      logging: 'warn',
    },
    proxy: []
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../templates/index.html'),
      chunks: ['index'],
    }),
  ]
})
