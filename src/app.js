require('./common/scss/manifest.scss')
require('font-awesome-webpack')

import React from 'react'
import { render } from 'react-dom'

import Home from 'features/home/components/home'

setTimeout(() => {
  render(
    <Home />,
    document.getElementById('root')
  )
}, 0)
