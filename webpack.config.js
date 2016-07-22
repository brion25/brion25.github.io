require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname,'./');

var config = {
  entry : [
    'font-awesome-webpack',
    './app/index.js'
  ],
  output : {
    path : outputPath,
    filename : 'dist/[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loaders : [
          'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react',
          'imports?config=>{size:50}'
        ]
      },{
        test : /\.json$/,
        loaders : [
          'json'
        ]
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
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  postcss : function(){
    return [autoprefixer];
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename : path.join(outputPath,'index.html'),
      template : './app/app.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('dist/[name].css'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV : JSON.stringify(process.env.ENV)
      }
    })
  ]
}

if(process.env.ENV === 'development'){
  config.entry.push(
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000'
  );
}
else if(process.env.ENV === 'production'){
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize:true}));
}

module.exports = config;
