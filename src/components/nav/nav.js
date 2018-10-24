import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/iron-selector/iron-selector'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/app-layout/app-header-layout/app-header-layout'
import '@polymer/app-layout/app-header/app-header'

import '../../utils/shared-styles'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import { VIEW_HOME, VIEW_CHALLENGES, VIEW_CONTACT } from '../../utils/constants'

import navStyle from './nav.scss'

navStyle()('nav-styles')

class Nav extends PolymerElement {
    static get template() {
        return html`
      <style include="common-styles nav-styles">
      </style>
      <app-header-layout>
        <app-header slot="header" reveals effects="waterfall">
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
        </app-header>
      </app-header-layout>
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
