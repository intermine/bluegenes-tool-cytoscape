const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: "production",
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
        loader: 'underscore-template-loader',
        options: {
          minimize: true
        },
        query: {
          interpolate: '\\{\\[(.+?)\\]\\}',
          evaluate: '\\{%([\\s\\S]+?)%\\}',
          escape: '\\{\\{(.+?)\\}\\}'
        }
      }],
    }]
  }
};
