module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,              // when parse require('xx.css'), use following loader
      loader: 'style!css!'
    }]
  }
}
