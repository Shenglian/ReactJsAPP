'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
	devtool: 'source-map',
	entry: {
		app: [
			'./src/js/index.js'
		],
		vendor: [
			'react',
			'react-dom'
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
    	filename: '[name].js',
    	publicPath: '/dist/'
	},
	plugins: [
		// 和 hot-loader 說這是 production
		new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   }
		}),
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			minChunks: Infinity
		}),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style", "css!sass!autoprefixer",{publicPath: "" })
			},
			// Image URL config. Generate data URI's for images smaller than 10,000 bytes
			{
				test: /\.(png|gif|jpe?g|svg)$/i, 
				loader: 'url?limit=10000'
			},
			// Image file config. Generate hashed file names to make them easy to cache.
			{
				test: /\.(png|gif|jpe?g|svg)$/i,
			   	loader: 'file?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]'
			},
			// Inline font files smaller than 10000 bytes
			{ 
				test: /\.(woff2?|ttf|eot|svg)$/, 
				loader: 'url?limit=10000' 
			},
			// File loader for fonts larger than 10000 bytes.
			{
				test: /\.(woff2?|ttf|eot|svg)$/, 
				loader: 'file?name=[name].[ext]' 
			}
		]
	}
})





