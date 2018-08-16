const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: "production",
  //slim.js loads without imtables, which we can assume is on the window
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: "bluegenesToolCytoscape",
    libraryTarget: "var"
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'raw-loader'
      }],
    }]
  }
}; 
