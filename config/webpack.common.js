const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge([
  {
    entry: {
      app: path.join(__dirname, '../static/index.js'),
    },
    output: {
      path: path.join(__dirname, '../build'),
      filename: '[name].bundle.js',
      publicPath: './',
    },
    target: 'web',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../static/template.html'),
        filename: 'index.html',
      }),

      new CopyWebpackPlugin([{ from: path.join('./src', 'assets'), to: path.join('..', 'build') }]),
    ],
    resolve: {
      modules: [path.resolve('node_modules'), 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.html'],
      alias: {
        '~components': '../src/components',
        '~pages': '../src/pages',
        '~assets': '../src/assets',
        '~hooks': '../src/hooks',
        '~': '../src',
      },
    },
    module: {
      rules: [
        {
          // images / icons
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
        {
          //fonts
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
        {
          //js / jsx
          test: /\.js(x?)$/,
          loader: 'babel-loader',
          exclude: '/node_modules/',
        },
        {
          //ts / tsx
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
          exclude: /node_modules/,
        }
      ],
    },
  },
]);
