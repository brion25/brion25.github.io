const styleElement = document.createElement('dom-module')

// Regular palette
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

      --light: var(--vivid-cerulean);
      --lighter: var(--white);
      --dark: var(--cerulean);
      --darker: var(--prusian-blue);
      --darkest: var(--rich-black);
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: 300;
    }
   </style>
 </template>
`

styleElement.register('common-styles')
