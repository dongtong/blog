var debug = process.env.NODE_ENV !== 'production';           // dev and production
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	devtool: debug ? "inline-sourcemap" : null,
	entry: './js/app.js',
	module: {
		loaders: [{
			test: /\.js?$/,                                  // transform .js, jsx
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0'],
				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
			}
		}]
	},
	output: {
		path: __dirname + "/src/",
		filename: 'app.min.js'
	},
	plugins: debug ? [] : [                                  // production uses config
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			sourcemap: false
		})
	]
};