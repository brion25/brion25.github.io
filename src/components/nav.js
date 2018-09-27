import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/iron-selector/iron-selector'
import 'fa-icon-polymer/fa-icon'

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
            background-color: var(--rich-black);
            box-shadow: 0 0px 2px var(--prusian-blue);
        }
        
        .nav iron-selector {
            display: flex;
            justify-content: center;
        }
        
        .link {
            padding: 10px 20px;
            display: inline-block;
            text-decoration: none;
            color: var(--white);
            text-transform: uppercase;
        }
        
        .link.iron-selected {
            background-color: var(--white);
            color: var(--rich-black);
        }
        
        fa-icon.icon-link {
            --icon-background-color: var(--rich-black);
            --icon-color: var(--white);
            margin-right: 5px;
        }
        
        .iron-selected fa-icon.icon-link {
            --icon-background-color: var(--white);;
            --icon-color: var(--prusian-blue)
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
            <fa-icon class="icon-link" icon-name="home"></fa-icon>
            [[routes.home.name]]
          </a>
          <a name="[[routes.contact.name]]" href="[[routes.contact.path]]" class="link">
            <fa-icon class="icon-link" icon-name="envelope"></fa-icon>
            [[routes.contact.name]]
          </a>
          <a name="[[routes.challenges.name]]" href="[[routes.challenges.path]]" class="link">
            <fa-icon class="icon-link" icon-name="file-alt"></fa-icon>
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
