const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = process.env.PUBLIC_URL || "/";

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      base: publicPath,
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
      filename: "index.html",
      template: './public/index.html',
    }),
  ],
};
