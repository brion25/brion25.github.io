import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/iron-selector/iron-selector'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'

import '../utils/shared-styles'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import { VIEW_HOME, VIEW_CHALLENGES, VIEW_CONTACT } from '../utils/constants'

class Nav extends PolymerElement {
    static get template() {
        return html`
      <style include="common-styles">
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            background-color: var(--darkest);
            box-shadow: 0 0px 2px var(--darker);
            z-index: 9999;
        }
        
        .nav iron-selector {
            display: flex;
            justify-content: center;
        }
        
        .link {
            padding: 10px 20px;
            text-decoration: none;
            color: var(--lighter);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .link.iron-selected {
            background-color: var(--lighter);
            color: var(--darkest);
        }
        
        iron-icon {
            margin-right: 5px;
        }
        
        @media only screen and (max-width: 750px) {
            .nav {
                bottom: 0;
                top: initial;
                flex-direction: row;
            }
            
            .link {
                flex: 1;
                padding: 10px 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
      </style>  
      <nav class="nav">
        <iron-selector selected="[[page]]" attr-for-selected="name">
          <a name="[[routes.home.name]]" href="[[routes.home.path]]" class="link">
            <iron-icon icon="home"></iron-icon>
            [[routes.home.name]]
          </a>
          <a name="[[routes.contact.name]]" href="[[routes.contact.path]]" class="link">
            <iron-icon icon="mail"></iron-icon>
            [[routes.contact.name]]
          </a>
          <a name="[[routes.challenges.name]]" href="[[routes.challenges.path]]" class="link">
            <iron-icon icon="receipt"></iron-icon>
            [[routes.challenges.name]]
          </a>
        </iron-selector>
      </nav>
    `
    }

    static get properties() {
        return {
            routes: {
                type: Object,
                notify: true,
                value() {
                    return {
                        [VIEW_HOME]: {
                            name: VIEW_HOME,
                            path: `#/${VIEW_HOME}`
                        },
                        [VIEW_CONTACT]: {
                            name: VIEW_CONTACT,
                            path: `#/${VIEW_CONTACT}`
                        },
                        [VIEW_CHALLENGES]: {
                            name: VIEW_CHALLENGES,
                            path: `#/${VIEW_CHALLENGES}`
                        },
                    }
                }
            },
        }
    }
}

customElements.define('my-nav', Nav)
