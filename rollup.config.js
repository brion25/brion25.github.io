import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import html from 'rollup-plugin-fill-html'
import serve from 'rollup-plugin-serve'
import string from 'rollup-plugin-string'
import replace from 'rollup-plugin-replace'
import { argv } from 'yargs'
import { resolve } from 'path'

import sassProcessor from './plugins/sass-processor'

const plugins = [
  nodeResolve({jsnext: true}),
  commonjs(),
  html({
    template: resolve(__dirname, './src/index.html'),
    filename: 'index.html'
  }),
  string({
    include: [
      '**/*.svg',
    ]
  }),
  sassProcessor(),
  replace({
    ENV_MAILER_ID: JSON.stringify(argv['mailer-id'])
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

console.log(argv)

export default {
  entry: resolve(__dirname, './src/index.js'),
  dest: resolve(__dirname, './dist/bundle.js'),
  format: 'iife',
  sourceMap: true,
  plugins: plugins
}
