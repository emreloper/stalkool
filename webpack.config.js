const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;

const entries = fs.readdirSync(path.resolve(__dirname, 'src/functions'), {
  encoding: 'utf8'
});

module.exports = {
  mode: NODE_ENV,
  devtool: 'source-map',
  entry: entries.reduce(
    (acc, app) => ({ ...acc, [app]: `./src/functions/${app}` }),
    {}
  ),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  target: 'node',
  node: false,
  optimization: {
    minimizer: [
      new TerserJSPlugin({ sourceMap: true }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css'
    })
  ]
};
