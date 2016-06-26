// 服务端
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, res) {
  if(err) {
    console.log('error:', err);
  }
  console.log('Listening at localhost: 3000');
});
