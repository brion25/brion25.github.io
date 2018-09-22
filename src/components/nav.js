import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/iron-selector/iron-selector'
import 'fa-icon-polymer/fa-icon'

import '../utils/shared-styles'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import { VIEW_HOME } from '../utils/constants'

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
            background-color: var(--bright-navy);
            box-shadow: 0 0px 2px var(--dark-cerulean);
        }
        
        .link {
            padding: 10px 15px;
            display: inline-block;
            text-decoration: none;
        }
        
        .link.iron-selected {
            color: var(--sea-serpent);
            background-color: var(--dark-cerulean);
        }
        
        fa-icon.icon-link {
            --icon-background-color: var(--bright-navy);
        }
        
        .iron-selected fa-icon.icon-link {
            --icon-background-color: var(--dark-cerulean);
        }
      </style>  
      <nav class="nav">
        <iron-selector selected="[[page]]" attr-for-selected="name">
          <dom-repeat items="[[_transformRoutes()]]" as="route">
            <template>
              <a name="[[route.name]]" href="[[route.path]]" class="link">
                <fa-icon class="icon-link" icon-name="heart"></fa-icon>
                [[route.name]]
              </a>                
            </template>
          </dom-repeat>
        </iron-selector>
      </nav>
    `
  }

  static get properties() {
    return {
      routes: {
        type: Array,
        notify: true,
        value() {
          return [
            VIEW_HOME,
            'hello'
          ]
        }
      },
    }
  }

  _transformRoutes() {
    return this.routes.map(route => ({
      name: route,
      path: `#/${route}`
    }))
  }
}

customElements.define('my-nav', Nav)
