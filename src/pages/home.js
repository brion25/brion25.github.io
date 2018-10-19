import '@polymer/polymer/lib/elements/dom-repeat'

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
          --grid-row-end: 4;
          --grid-column-start: 1;
          --grid-column-end: 2;
          --grid-template-columns: 220px 1fr;
          --grid-template-rows: 80px 35px 35px;
          
          --presentation-width: 70%;
          --presentation-social-wrap: nowrap;
          --presentation-social-item-margin-bottom: 0;
          --presentation-social-item-border-width: 0;
          --presentation-social-item-padding: 0 10px 2px 2px;
          --presentation-social-item-margin: -5px 10px 3px;
          
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
        
        .presentation__social {
          display: flex;
          justify-content: space-around;
          flex-wrap: var(--presentation-social-wrap);
        }
        
        .presentation__social-item {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--darker);
          margin-bottom: var(--presentation-social-item-margin-bottom);
        }
                
        .presentation__social-item:hover .presentation__social-item-text:before {
          --presentation-social-item-border-width: 100%;
        }
        
        .presentation__social-item my-svg {
          --icon-size: 20px;
        }
        
        .presentation__social-item-text {
          display: inline-block;
          position: relative;
          text-transform: capitalize;
          padding: var(--presentation-social-item-padding);
          margin: var(--presentation-social-item-margin);
        }
        
        .presentation__social-item-text:before {
          content: ' ';
          position: absolute;
          border-bottom: 1px solid;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.3s cubic-bezier(.17,.67,.83,.67);
          width: var(--presentation-social-item-border-width);
        }
        
        .stack {
          padding-bottom: 10px;
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
        
        .stack__technologies-item__header {
          text-transform: capitalize;
        }
        
        @media only screen and (max-width: 750px) {
          .presentation {
            --grid-template-columns: 1fr;
            --grid-template-rows: 160px 1fr 1fr;
            --presentation-width: 80%;
          }
          
          .presentation__social {
            --presentation-social-wrap: wrap;
            --presentation-social-item-margin-bottom: 10px;
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
          
          my-svg {
            --icon-size: 50px;
          }
          
        .presentation__social-item {
          --presentation-social-item-margin: -5px 5px 0px;
          --presentation-social-item-padding: 0 5px 2px 2px;
        }

          .stack__technologies {
            --stack-template-columns: 1fr 1fr 1fr 1fr;
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
            <div class="presentation__social">
              <dom-repeat items="{{social}}">
                <template>
                  <a class="presentation__social-item" target="_blank" href="{{item.link}}">
                    <my-svg icon="{{item.icon}}"></my-svg>
                    <div class="presentation__social-item-text">{{item.icon}}</div>
                  </a>
                </template>
              </dom-repeat>
            </div>
          </div>
        </div>
        <div class="stack__wrapper">
          <div class="stack">
            <hr />
            <h3 class="stack__header">My Stack:</h3> 
            <div class="stack__technologies">
              <dom-repeat items="{{stack}}">
                <template>
                  <div class="stack__technologies-item">
                    <my-svg icon="{{item}}"></my-svg>
                    <h3 class="stack__technologies-item__header">{{item}}</h3>
                  </div>
                </template>
              </dom-repeat>
            </div>         
          </div>
        </div>
      </div>
    `
    }

    static get properties() {
        return {
            stack: {
                type: Array,
                value() {
                    return [
                        'JS',
                        'java',
                        'react',
                        'angular',
                        'dart',
                        'css',
                        'html',
                        'node',
                        'graphql',
                        'apollo',
                        'sass',
                        'redux',
                        'mobx',
                        'polymer',
                        'SQL',
                        'NoSQL',
                        'gulp',
                        'npm',
                        'webpack',
                        'rollup',
                        'AWS',
                        'git',
                        'github',
                        'TDD',
                    ]
                }
            },
            social: {
                type: Array,
                value() {
                    return [
                        {
                            icon: 'github',
                            link: 'https://github.com/brion25'
                        },
                        {
                            icon: 'npm',
                            link: 'https://www.npmjs.com/~brion25'
                        },
                        {
                            icon: 'twitter',
                            link: 'https://twitter.com/bartsis'
                        },
                        {
                            icon: 'codepen',
                            link: 'https://codepen.io/bartsis/'
                        },
                        {
                            icon: 'medium',
                            link: 'https://medium.com/@bartsis'
                        },
                        {
                            icon: 'blogger',
                            link: 'http://brion25.blogspot.com/'
                        }
                    ]
                }
            }
        }
    }
}

customElements.define('my-home', Home)
