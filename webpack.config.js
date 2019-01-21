var webpack = require('webpack');
var path = require('path')

module.exports = {
  entry: './lib/AMap.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? 'react-a.min.js' : 'react-a.js',
    library: 'ReactA',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'components'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, 'lib'),
        exclude: path.resolve(__dirname, 'node_modules') 
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        exclude:/node_modules/,
        query: {
          limit: 10000,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  // externals: {
  //   'react': 'react',
  //   'react-dom': 'react-dom',
  // }
};