var webpack = require('webpack'),
    path = require('path');

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
      }
    ]
  }
}
