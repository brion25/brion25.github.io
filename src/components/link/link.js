import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import '../../utils/shared-styles'

import linkStyle from './link.scss'

linkStyle()('link-style')

class Link extends PolymerElement {
  static get template() {
    return html`
    <style include="common-styles link-style"></style>
    <a class="link" target="_blank" href="{{href}}">
        <div class="link__content ">
          <template is="dom-if" if="{{icon}}">
              <div class="link__icon">
                  <my-svg icon="{{icon}}"></my-svg>
              </div>
          </template>
          <div class="link__text">{{text}}</div>        
        </div>
    </a>
    `
  }

  static get properties() {
    return {
      icon: {
        type: String
      },
      href: {
        type: String
      },
      text: {
        type: String
      }
    }
  }
}

customElements.define('my-link', Link)
