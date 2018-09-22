import { PolymerElement, html } from '@polymer/polymer/polymer-element'

class Home extends PolymerElement {
  static get template() {
    return html`
      <h1>Hello</h1>
    `
  }
}

customElements.define('my-home', Home)
