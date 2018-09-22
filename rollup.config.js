import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import html from 'rollup-plugin-fill-html'
import serve from 'rollup-plugin-serve'
import { resolve } from 'path'

export default {
  entry: resolve(__dirname, './src/index.js'),
  dest: resolve(__dirname, './dist/bundle.js'),
  format: 'iife',
  sourceMap: true,
  plugins: [
    nodeResolve({jsnext: true}),
    commonjs(),
    html({
      template: resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: resolve(__dirname, './dist')
    })
  ]
}
