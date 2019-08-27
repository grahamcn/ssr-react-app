const webpack = require('webpack')

module.exports = () => ({
  entry: ['./src/index.js'],
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      BASE_API: JSON.stringify('http://www.yahoo.com'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
})
