const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  // devtool: "source-map",
  mode: 'production',
  module: {
    rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({ /*title: 'Base',*/ template: './src/index.html',filename: 'index.html', minify: false}),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  devServer: {
    hot: true,
    open: true,
    port: 8080,
  },
};