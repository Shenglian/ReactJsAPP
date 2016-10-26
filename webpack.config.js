'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/js', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],

    module: {
        // preLoaders: [{
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   include: /src/,
        //   loader: 'standard'
        // }],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                // loader: 'style!css?modules!autoprefixer!sass?sourceMap' // hash化
                loader: 'style!css!autoprefixer!sass?sourceMap'
            }
        ]
    }
})
