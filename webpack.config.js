const path = require('path')
const getConfig = require('hjs-webpack')

const config = getConfig({
  in: 'src/app.js',
  out: '/',
  clearBeforeBuild: true,
  html: function(context) {
    return {
      'index.html': context.defaultTemplate({
        head: '<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">'
      })
    }
  }
})

config.resolve.alias = {
  features: path.resolve(__dirname,'./src/features'),
  common: path.resolve(__dirname,'./src/common'),
}

module.exports = config
