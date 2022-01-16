const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TEALAX - Make Everything With Love',
      filename: 'index.html',
      favicon: './src/homepage/resources/YUMCHA-Gold.svg',
    }),
    // new FaviconsWebpackPlugin('./src/homepage/resources/YUMCHA-Gold.svg'),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: 'asset/resource',
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};