const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

module.exports = {
  target: 'web',
  devServer: {
    port: 3000,
    contentBase: './dist',
    historyApiFallback: true
  },
  entry: {
    app: ['./src/main.jsx'],
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-player']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    // publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles.css',
      chunkFileName: './styles.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: 'body'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FaviconsWebpackPlugin(),
    new RobotstxtPlugin()
  ],
  mode: node_env
};
