var webpack = require('webpack');
const path = require('path');

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve)
const isProductionEnvironment = process.env.NODE_ENV === "production"

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
            include: [resolvePath('src/ts')],
            loader: 'ts-loader'
        },
        {
            test: /\.s(a|c)ss$/, //.sass / .scss
            include: [resolvePath('./src/styles')],
            loader: 'style-loader!css-loader!sass-loader'
        }
  	]
  },
  //Ocultando extenções ao fazer include
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.ts', '.scss'],
  	alias: {
  		styles: resolvePath('src/styles'),
  		helpers: resolvePath('src/ts/helpers')
  	}
  },
  plugins: isProductionEnvironment ?  [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }) 
  ] : []
}
