const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // デフォルト
    path: path.resolve(__dirname, 'docs')
  },
  optimization: {
    splitChunks: {
      name: 'vendor'
    }
  }
};
