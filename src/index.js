import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/app-route/app-location'
import '@polymer/app-route/app-route'
import '@polymer/iron-pages/iron-pages'

import './utils/shared-styles'
import './components/nav'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import { VIEW_HOME, VIEW_404 } from './utils/constants'

class MyApp extends PolymerElement {
  static get template() {
    return html`
        <style include="common-styles">
            .content {
                position: absolute;
                z-index: -1;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                height: calc(100% - 25px);
                padding-top: 25px;
                width: 100%;
                background-color: var(--white);
                color: var(--rich-black);
                max-width: 1020px;
            }
            
            @media only screen and (max-width: 750px) {
                .content {
                    padding-top: 0;
                    height: calc(100% - 60px);
                    padding-bottom: 60px;                                        
                }
            }
        </style>
        <app-location route="{{route}}" use-hash-as-path></app-location>
        <app-route
          route="{{route}}"
          pattern="/:view"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>
        
        <my-nav page$="{{page}}"></my-nav>
        
        <div class="content">
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
              <my-home name="home"></my-home>
          </iron-pages>        
        </div>
    `
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
        notify: true,
      },
      routeData: Object,
      subroute: Object
    }
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.view)'
    ]
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = VIEW_HOME
    } else if ([VIEW_HOME].includes(page)) {
      this.page = page
    } else {
      this.page = VIEW_404
    }
  }

  _pageChanged(page) {
    switch(page){
      case VIEW_HOME:
        import('./pages/home')
    }
  }
}

customElements.define('my-app', MyApp)
