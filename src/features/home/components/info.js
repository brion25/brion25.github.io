require('./info.scss')

import React from 'react'

import contact from '../assets/contact-info'
import face from 'common/assets/cara.svg'

export default () => {
  return (
    <div data-component="info" className="info">
      <img src={face} />
      <h1 className="title">Jose Carlos Ixcoatl Gomez Briones</h1>
      <h2 className="sub-title">
        Senior Javascript Developer
        <a href="https://www.unosquare.com/" target="_blank">@Unosquare</a>
      </h2>
      {contact.map(({nickname, icon}, i) => (
        <a key={`contact-${i}`} className="contact-info">
          <i className={`fa ${icon}`}></i>
          {nickname}
        </a>
      ))}
    </div>
  )
}
