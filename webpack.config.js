const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const applyPresets = require('./build-utils/applyPresets')

const paths = {
  ROOT: path.resolve(__dirname, '..'),
  DIST: path.resolve(__dirname, './', 'dist'),
}

// the path(s) that should be cleaned
const pathsToClean = [paths.DIST]

// the clean options to use
let cleanOptions = {
  root: paths.ROOT,
  verbose: true,
}

// return a function with default values that returns a webpack config object
module.exports = ({ mode = 'production', presets = [] }) => {
  console.log('== mode ==') // eslint-disable-line
  console.log(mode) // eslint-disable-line
  console.log('== end mode ==') // eslint-disable-line

  return webpackMerge(
    {
      mode,
      output: {
        path: path.join(__dirname, 'dist', '/'),
        publicPath: '/',
        filename: 'app.bundle.js',
      },
      plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebPackPlugin({ template: './src/index.html' }),
        new webpack.ProgressPlugin(),
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_nodules/,
          },
        ],
      },
      resolve: {
        extensions: ['.js'],
      },
    },
    modeConfig(mode),
    applyPresets({ mode, presets }),
  )
}
