const path = require('path');
const { merge } = require('webpack-merge');

const config = require('./webpack.common.js');
const styles = require('./modules/css.dev');
const clearTerminal = require('./modules/cleanTerminal');

const mode = () => ({ mode: 'development' });
const devtool = () => ({ devtool: 'inline-source-map' });
const devServer = () => ({
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    publicPath: '/',
    compress: true,
    port: 3030,
    historyApiFallback: true,
    noInfo: false,
  },
});

module.exports = function () {
  return merge([mode(), devtool(), devServer(), styles(), clearTerminal(), config]);
};
