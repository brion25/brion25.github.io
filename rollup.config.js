import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import html from 'rollup-plugin-fill-html'
import serve from 'rollup-plugin-serve'
import string from 'rollup-plugin-string'
import { argv } from 'yargs'
import { resolve } from 'path'

const plugins = [
  nodeResolve({jsnext: true}),
  commonjs(),
  html({
    template: resolve(__dirname, './src/index.html'),
    filename: 'index.html'
  }),
  string({
    include: '**/*.svg'
  })
]

if (argv.watch) {
  plugins.push(
    serve({
      open: true,
      verbose: true,
      contentBase: resolve(__dirname, './dist')
    })
  )
}

export default {
  entry: resolve(__dirname, './src/index.js'),
  dest: resolve(__dirname, './dist/bundle.js'),
  format: 'iife',
  sourceMap: true,
  plugins: plugins
}
