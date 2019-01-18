var webpack = require('webpack');

module.exports = {
  entry: './lib',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    filename: 'doc.js',
    library: 'doc',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
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
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  }
};