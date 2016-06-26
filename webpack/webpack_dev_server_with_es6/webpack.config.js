var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',   // Node API方式实现HMR
    'webpack/hot/dev-server',                            // Node API方式实现HMR
    './src/javascripts/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      //loader: 'babel-loader',
      loaders: ['babel'],                                   // loaders 值是数组
      include: path.join(__dirname, 'src', 'javascripts')   // 指定目录加快build
    },{
      test: /\.scss$/,
      //loader: 'style-loader!css-loader!sass-loader?sourceMap',  // 从右向左使用loader解析
      loader: 'style!css!sass?sourceMap',                    // 从右向左使用loader解析
      include: path.join(__dirname, 'src/scss')
    },{
      test: /\.css$/,
      // loader: 'style-loader!css-loader?sourceMap',
      loader: 'style!css?sourceMap',
      include: path.join(__dirname, 'src/scss')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
