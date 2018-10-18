import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import '../components/logo'
import '../components/svg'
import '../utils/shared-styles'

class Home extends PolymerElement {
  static get template() {
    return html`
      <style include="common-styles">
        :host {
          --grid-row-start: 1;
          --grid-row-end: 3;
          --grid-column-start: 1;
          --grid-column-end: 2;
          --grid-template-columns: 220px 1fr;
          --grid-template-rows: 1fr 1fr;
          
          --presentation-width: 70%;
          
          --stack-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
      
        h1,
        h3 {
          font-weight: 300;        
        }
        
        my-logo {
          --logo-color: var(--darker);
        }
        
        my-svg {
          --icon-color: var(--darker);
          --icon-size: 65px;
        }
        
        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 200px;
        }
        
        .presentation {
          display: grid;
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
        
        .presentation__wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }
        
        .presentation__institution {
          text-decoration: none;
          color: var(--darker);
        }
        
        .stack__header {
          text-align: center;
        }
        
        .stack__technologies {
          display: grid;
          grid-template-columns: var(--stack-template-columns);
        }
        
        .stack__technologies-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        @media only screen and (max-width: 750px) {
          .presentation {
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
            padding-top: 15px;
            text-align: center;
          }          
        }
      </style>
      <div class="container">
        <div class="presentation__wrapper">
          <div class="presentation">
            <div class="presentation__logo">
              <my-logo></my-logo>          
            </div>
            <h1 class="presentation__name">Jose Carlos Ixcoatl Gomez Briones</h1>
            <h3 class="presentation__desc">
              JavaScript Ninja
              <a class="presentation__institution" href="https://www.unosquare.com/" target="_blank"> @Unosquare</a>
            </h3>
          </div>
        </div>
        <div class="stack__wrapper">
          <div class="stack">
            <hr />
            <h3 class="stack__header">My Stack:</h3> 
            <div class="stack__technologies">
              <div class="stack__technologies-item">
                <my-svg icon="angular"></my-svg>
                <h3>Angular</h3>              
              </div>
              <div class="stack__technologies-item">
                <my-svg icon="react"></my-svg>
                <h3>React</h3>              
              </div>
            </div>         
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('my-home', Home)
