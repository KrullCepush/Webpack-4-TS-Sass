module.exports = function () {
  return {
    module: {
      rules: [
        //global scss
        {
          test: /\.scss$/,
          include: /\.global\.scss$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,

                importLoaders: 2,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
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
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 2,
              },
            },

            {
              loader: 'sass-loader',
              options: { sourceMap: true },
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
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,

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
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
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
  };
};
