const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devServer: { 
      compress: true,
      port:3000
    },
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },    
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
          loader:'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html'
      }),
    ]
}
