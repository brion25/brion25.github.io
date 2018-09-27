import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import '../components/logo'
import '../utils/shared-styles'

class Home extends PolymerElement {
  static get template() {
    return html`
      <style include="common-styles">
        :host {
          --transform-translate-x: -50%;
          --transform-translate-y: -50%;

          --grid-row-start: 1;
          --grid-row-end: 3;
          --grid-column-start: 1;
          --grid-column-end: 2;
          --grid-template-columns: 220px 1fr;
          --grid-template-rows: 1fr 1fr;
          
          --presentation-width: 70%;
        }
      
        h1,
        h3 {
          font-weight: 300;        
        }
        
        my-logo {
          --logo-color: var(--prusian-blue);
        }
        
        .presentation {
          position: absolute;
          top: 200px;
          left: 50%;
          display: grid;
          transform: translate(var(--transform-translate-x), var(--transform-translate-y));
          grid-template-columns: var(--grid-template-columns);
          grid-template-rows: var(--grid-template-rows);
          width: var(--presentation-width);
        }
        
        .presentation__logo {
          display: flex;
          align-items: center;
          justify-content: center;
    
          grid-row-start: var(--grid-row-start);
          grid-row-end: var(--grid-row-end);
          grid-column-start: var(--grid-column-start);
          grid-column-end: var(--grid-column-end);
        }
        
        .presentation__name {
          margin-bottom: 0;
        }
        
        .presentation__desc {
          margin-top: 0;
        }
        
        .container {
          padding-top: 400px;
        }
        
        @media only screen and (max-width: 750px) {
          .presentation {
            --transform-translate-y: -200px;  
            --grid-template-columns: 1fr;
            --grid-template-rows: 180px 1fr 1fr;
            --presentation-width: 80%;
          }
          
          my-logo {
            --grid-row-start: 1;
            --grid-row-end: 2;
            --grid-column-start: 1;
            --grid-column-end: 2;          
          }
          
          .presentation__name,
          .presentation__desc {
            text-align: center;
          }
        }
      </style>
      <div class="container">
        <div class="presentation">
          <div class="presentation__logo">
            <my-logo></my-logo>          
          </div>
          <h1 class="presentation__name">Jose Carlos Ixcoatl Gomez Briones</h1>
          <h3 class="presentation__desc">JavaScript Ninja</h3>
        </div>
      </div>
    `
  }
}

customElements.define('my-home', Home)
