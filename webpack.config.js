const path = require('path')
const getConfig = require('hjs-webpack')

const config = getConfig({
  in: 'src/app.js',
  out: 'dist/',
  clearBeforeBuild: true,
  html: function(context) {
    return {
      'index.html': context.defaultTemplate({
        head: `
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
            <meta property='og:title' content="Brion25 WebSite"/>
            <meta property='og:image' content="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsLAAAAJGI1NWFjMWY2LTY4NTQtNGY3Yy1iOWIxLTQzYzBkNTYwM2FlMg.jpg"/>
            <meta property='og:description' content="I'm a JavaScript Ninja focused on developing the most proficient and scalable WebApps"/>
            <meta property='og:url' content="http://brion25.github.io/" />
            `,
        html: '<div id="root"></div><div id="particles-js"></div>'
      })
    }
  }
})

config.resolve.alias = {
  features: path.resolve(__dirname,'./src/features'),
  common: path.resolve(__dirname,'./src/common'),
}

module.exports = config
