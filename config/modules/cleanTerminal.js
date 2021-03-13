const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = function () {
  return {
    plugins: [
      new CleanTerminalPlugin({
        message: `dev server running on http://local:3030`,
        onlyInWatchMode: false,
      }),
    ],
  };
};
