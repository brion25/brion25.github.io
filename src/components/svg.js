import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import angular from '@fortawesome/fontawesome-free/svgs/brands/angular.svg'
import react from '@fortawesome/fontawesome-free/svgs/brands/react.svg'

const ICON_MAP = {
  angular,
  react
}

class SVG extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --icon-color: green;
          --icon-size: 10px;
        }
        
        .icon svg {
          fill: var(--icon-color);
          width: var(--icon-size);
        }        
      </style>
      <i class="icon"></i>
    `
  }

  static get properties() {
    return {
      icon: {
        type: String
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    const icon = ICON_MAP[this.icon] || ''
    const tag = document.createElement('p')

    tag.innerHTML = icon

    if (tag.firstChild) {
      this.shadowRoot.querySelector('.icon').appendChild(tag.firstChild)
    }
  }
}

customElements.define('my-svg', SVG)
