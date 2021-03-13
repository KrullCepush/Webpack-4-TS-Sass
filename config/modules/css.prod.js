const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function () {
  return {
    module: {
      rules: [
        //global scss
        {
          test: /\.scss$/,
          include: /\.global\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,

                importLoaders: 2,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer', 'cssnano'],
                },
              },
            },
          ],
        },

        //local scss
        {
          test: /\.scss$/,
          exclude: /\.global\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 2,
              },
            },

            {
              loader: 'sass-loader',
              options: { sourceMap: false },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer', 'cssnano'],
                },
              },
            },
          ],
        },

        //global css
        {
          test: /\.css$/,
          include: /\.global\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,

                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer', 'cssnano'],
                },
              },
            },
          ],
        },

        //local css
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },

                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer', 'cssnano'],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],
  };
};
