const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [
    './app/index.js'
  ],
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/bundle/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, 'app')],
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env',  { "modules": false }],
          '@babel/preset-react'
        ],
        plugins: ['@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-class-properties']
      }
    }, {
      test: /\.(scss|css)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  externals: [nodeExternals({
    // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
    // whitelist: ['jquery', 'webpack/hot/dev-server', /^lodash/]
  })]
}
