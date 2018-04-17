const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const browserConfig = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

const serverConfig = {
  entry: './server/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'transpiledServer.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
