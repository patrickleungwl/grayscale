const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'lib/js/background.js': './src/js/background.js',
    'lib/js/content.js': './src/js/content.js'
  },
  output: {
    path: '.',
    filename: '[name]'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/icons',
        to: './lib/icons'
      }
    ])
  ]
};
