const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  entry: './src/index.js',
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      BASE_API: JSON.stringify('http://www.google.com'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
})
