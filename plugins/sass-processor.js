import sass from 'node-sass'
import { extname } from 'path'
import { createFilter } from 'rollup-pluginutils'

export default function svg ( options = {} ) {
  const filter = createFilter( options.include, options.exclude )

  return {
    name: 'sass',

    transform ( code, id ) {

      if ( !filter( id ) || extname( id ) !== '.scss') {
        return null
      }

      const css = sass.renderSync({
        file: id,
        outputStyle: 'compressed'
      }).css.toString()

      const getDOMModule = (name) => {
        const DOMModule = document.createElement('dom-module')

        DOMModule.innerHTML = `
          <template>
            <style>
              ${decodeURIComponent(css)}
            </style>
          </template>
        `

        DOMModule.register(name)
      }

      // HACK to pass the compiled SASS as a default parameter to
      // a inner function which is going to register the styles
      const exportee = `export default (css="${encodeURIComponent(css)}") => ${getDOMModule.toString()}`

      return { code: exportee, map: { mappings: '' } }
    }
  }
}