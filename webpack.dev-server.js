var WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    path = require('path'),
    config = require('./webpack.config.js');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler,{
  contentBase:path.join(__dirname,'./'),
  noInfo:false,
  stats:{
    colors:true
  }
});

server.listen(3000,function(){
  console.log("Server is listen at: http://localhost:3000");
});
