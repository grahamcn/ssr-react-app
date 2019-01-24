const webpack = require('webpack')
const BootstrapClientSettingsPlugin = require('./plugins/bootstrapClientSettings')

module.exports = () => ({
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  devtool: 'source-map',
  plugins: [
    new BootstrapClientSettingsPlugin(), // pass client id from Env
    new webpack.DefinePlugin({
      BASE_API: JSON.stringify('http://www.yahoo.com'),
    }),
    new webpack.HotModuleReplacementPlugin(),
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
