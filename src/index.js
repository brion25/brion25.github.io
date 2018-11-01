import '@webcomponents/webcomponentsjs/webcomponents-bundle'

import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/app-route/app-location'
import '@polymer/app-route/app-route'
import '@polymer/iron-pages/iron-pages'

import './utils/shared-styles'
import './components/nav/nav'

import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import { VIEW_HOME, VIEW_CONTACT, VIEW_CHALLENGES, VIEW_CHALLENGE, VIEW_404 } from './utils/constants'

class MyApp extends PolymerElement {
    static get template() {
        return html`
        <style include="common-styles">
            :host {
                --top-spacing: 40px;
            }
        
            .content {
                position: absolute;
                top: var(--top-spacing);
                left: 50%;
                transform: translateX(-50%);
                height: calc(100% - var(--top-spacing));
                width: 100%;
                max-width: 1020px;
            }
            .content__wrapper {
                width: 100%;
                height: 100%;
                background-color: var(--lighter);
                color: var(--darkest);
            }
            
            @media only screen and (max-width: 750px) {
                .content {
                    --top-spacing: 0px;                                      
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
          <app-route
            route="{{subroute}}"
            pattern="/:id"
            data="{{subrouteData}}">
          </app-route>
        
        <my-nav page$="{{page}}"></my-nav>
        
        <div class="content__wrapper">
          <div class="content">
            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
                <my-home name="home"></my-home>
                <my-contact name="contact"></my-contact>
                <my-challenges name="challenges"></my-challenges>
                <my-challenge name="challenge" params="{{subrouteData}}"></my-challenge>
            </iron-pages>        
          </div>        
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
            subroute: Object,
            subrouteData: Object
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
        } else if ([VIEW_HOME, VIEW_CONTACT, VIEW_CHALLENGES, VIEW_CHALLENGE].includes(page)) {
            this.page = page
        } else {
            this.page = VIEW_404
        }
    }

    _pageChanged(page) {
        switch(page){
            case VIEW_HOME:
                import('./pages/home')
                break
            case VIEW_CONTACT:
                import('./pages/contact')
                break
            case VIEW_CHALLENGES:
                import('./pages/challenges')
                break
            case VIEW_CHALLENGE:
                import('./pages/challenge/challenge')
                break
        }
    }
}

customElements.define('my-app', MyApp)
