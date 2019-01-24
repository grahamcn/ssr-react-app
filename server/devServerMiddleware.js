// https://webpack.js.org/guides/development/#using-webpack-dev-middleware
// https://webpack.js.org/guides/hot-module-replacement/
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')({ mode: 'development' })
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const compiler = webpack(webpackConfig)

function setUpDevServerMiddleware(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      open: true,
      hot: true,
      inline: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8090/',
          hot: true,
          secure: false,
          changeOrigin: true,
        },
      },
    }),
  )

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log, // eslint-disable-line
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  )
}

export { setUpDevServerMiddleware }
