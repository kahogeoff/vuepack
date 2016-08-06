'use strict'
const webpack = require('webpack')
const config = require('./webpack.base')

config.output.publicPath = '/assets/'
config.entry.client = ['webpack-hot-middleware/client', config.entry.client]
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

config.module.loaders.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
})

module.exports = config