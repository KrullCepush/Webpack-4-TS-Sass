const path = require('path');
const { merge } = require('webpack-merge');

const config = require('./webpack.common.js');
const styles = require('./modules/css.prod');

const mode = () => ({ mode: 'production' });

module.exports = function () {
  return merge([mode(), styles(), config]);
};
