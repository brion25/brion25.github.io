var autoprefixer = require('autoprefixer'),
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:path.join(__dirname,'./app/index.js'),
  output:{
    path:path.join(__dirname,'./dist/'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query : {
          presets : [
            'react',
            'es2015'
          ]
        }
      },
      {
        test:/\.jade$/,
        loader:"jade"
      },
      {
        test:/\.scss$/,
        loader : ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader!sass-loader')
      }
    ]
  },
  postcss : function(){
    return [autoprefixer];
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({minimize:true}),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
