const styleElement = document.createElement('dom-module')

// Color palette: https://coolors.co/ffffff-00171f-003459-007ea7-00a8e8

styleElement.innerHTML = `
<template>
   <style>
    :host {
      --vivid-cerulean: #00A8E8;
      --white: #FFFFFF;
      --cerulean: #007EA7;
      --rich-black: #00171F;
      --prusian-blue: #003459;
    }
   </style>
 </template>
`

styleElement.register('common-styles')
