const path = require('path')

module.exports = {
  entry: './src/ts/app/app.ts',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
  	loaders: [
  		{
            test: /\.ts$/,
            include: [path.resolve(__dirname, './src/ts')],
            loader: 'ts-loader'
        },
        {
            test: /\.s(a|c)ss$/, //.sass / .scss
            include: [path.resolve(__dirname, './src/styles')],
            loader: 'style-loader!css-loader!sass-loader'
        }
  	]
  },
  //Ocultando extenções ao fazer include
  resolve: {
  	extensions: ['.webpack.js','".web.js', '.js', '.ts', '.scss'],
  	alias: {
  		styles: path.resolve(__dirname, 'src/styles'),
  		helpers: path.resolve(__dirname, 'src/ts/helpers')
  	}
  }
}
