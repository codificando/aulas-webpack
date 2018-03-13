const path = require('path')

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
  	loaders: [
  		{
  			test: /\.ts,
  			include: ['src']
  			loader: 'ts-loader'
  		}
  	]
  }
}
