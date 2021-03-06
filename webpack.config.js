var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[chunkhash].js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/plume2')
        ],
        loader: 'babel-loader?cacheDirectory=true'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!less-loader'
        })
      },
      {
        test: /\.(png|ico|jpg|jpeg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].style.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      env: true,
      favicon: './favicon.ico',
      filename: 'index.html',
      template: './index.ejs'
    })
  ],
  devServer: {
    port: 3000
  }
};
