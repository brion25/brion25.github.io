import '@polymer/polymer/lib/elements/dom-repeat'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

class Logo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --logo-color: black;
          --logo-scale: 1;
          --logo-opacity: 1;
          --logo-animation-delay: 0s;
          --logo-animation-duration: 0.75s;
          --logo-initial-top: 0px;
        }
      
        .container {
          position: relative;
          display: inline-block;
          width: 130px;
          height: 130px;
        }
        
        .container:hover svg {
          animation-name: bounce;
          animation-duration: var(--logo-animation-duration);
          animation-delay: var(--logo-animation-delay);
        }
        
        .container:hover svg:nth-child(4) {
          --logo-animation-delay: 0.15s;
        }
        
        .container:hover svg:nth-child(3) {
          --logo-animation-delay: 0.3s;
        }
        
        .container:hover svg:nth-child(2) {
          --logo-animation-delay: 0.45s;
        }
        
        .container:hover svg:nth-child(1) {
          --logo-animation-delay: 0.6s;
        }
        
        svg {
          height: 86.062%;
          width: 100%;
          transform: skewX(16deg) rotate(-35deg) scale(var(--logo-scale));
          position: absolute;
          opacity: var(--logo-opacity);
          transition: all ease-in var(--logo-animation-duration);
          top: var(--logo-initial-top);
        }
        
        svg path {
          fill: var(--logo-color);
        }
        
        svg:nth-child(4) {
          --logo-scale: 1;
          --logo-opacity: 1;
          --logo-initial-top: 0px;
        }

        svg:nth-child(3) {
          --logo-scale: 0.8;
          --logo-opacity: 0.75;
          --logo-initial-top: 5px;
          left: -22px;
        }

        svg:nth-child(2) {
          --logo-scale: 0.6;
          --logo-opacity: 0.5;
          --logo-initial-top: 10px;
          left: -40px;
        }

        svg:nth-child(1) {
          --logo-scale: 0.4;
          --logo-opacity: 0.25;
          --logo-initial-top: 15px;
          left: -55px;
        }
        
        @keyframes bounce {
          33% {
            top: -25%;
          }
          
          66% {
            top: 10%;
          }
          
          100% {
            top: var(--logo-initial-top);
          }          
        }
      </style>
      <div class="container">
        <dom-repeat items="{{logoNodes}}">
          <template>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="238.609 82.833 109.391 97.043" width="109.391" height="97.043">
              <path d=" M 338.728 179.877 L 293.305 179.877 L 247.881 179.877 C 239.602 179.877 236.242 174.056 240.381 166.887 L 263.093 127.549 L 285.805 88.211 C 289.944 81.041 296.665 81.041 300.805 88.211 L 323.516 127.549 L 346.228 166.887 C 350.367 174.056 347.007 179.877 338.728 179.877 Z  M 315.714 163.991 L 293.305 163.991 L 270.895 163.991 C 265.376 163.991 263.135 160.111 265.895 155.331 L 277.1 135.924 L 288.305 116.517 C 291.064 111.737 295.545 111.737 298.305 116.517 L 309.509 135.924 L 320.714 155.331 C 323.474 160.111 321.233 163.991 315.714 163.991 Z " fill-rule="evenodd"/>
            </svg>              
          </template>
        </dom-repeat>
      </div>
    `
  }

  static get properties() {
    return {
      logoNodes: {
        value() {
          return [1,2,3,4]
        }
      }
    }
  }
}

customElements.define('my-logo', Logo)
