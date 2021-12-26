const { DefinePlugin } = require("webpack");
const { default: merge } = require("webpack-merge");
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: '/public'
    },
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
     new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://psychonauts-api.netlify.app/')
     }),
     new HtmlWebpackPlugin({
      template: './template.dev.html'
     })
  ]
})