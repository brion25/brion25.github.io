var autoprefixer = require('autoprefixer'),
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:[
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.join(__dirname,'./app/index.js')
  ],
  output:{
    path:path.join(__dirname,'./'),
    filename:'dist/bundle.js'
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss : function(){
    return [autoprefixer];
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize:false}),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('dist/bundle.css'),
    new HtmlWebpackPlugin({
      title : '@bartsis',
      path : '/',
      template : './app/app.html'
    })
  ]
}
