var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:path.join(__dirname,'./app/app.js'),
  output:{
    path:path.join(__dirname,'./dist/'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel?presets[]=es2015"
      },
      {
        test:/\.jade$/,
        loader:"jade"
      },
      {
        test:/\.scss$/,
        loader : ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({minimize:true}),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('bundle.css')
  ]
}
