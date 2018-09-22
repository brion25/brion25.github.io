const styleElement = document.createElement('dom-module')

// Color palette: https://coolors.co/1c77c3-39a9db-40bcd8-00487c-4bb3fd

styleElement.innerHTML = `
<template>
   <style>
    :host {
      --dark-cerulean: #00487C;
      --bright-navy: #1C77C3;
      --maximum-blue: #39A9DB;
      --sea-serpent: #40BCD8;
      --picton-blue: #4BB3FD;
    }
   </style>
 </template>
`

styleElement.register('common-styles')
