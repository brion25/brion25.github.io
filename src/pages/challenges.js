import '@polymer/paper-card/paper-card'
import '@polymer/paper-button/paper-button'
import '@polymer/polymer/lib/elements/dom-repeat'
import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import '../utils/shared-styles'
import challengesStyles from './challenges.scss'
import { getChallenges } from '../services/challenges'

challengesStyles()('challenges-style')

class Challenges extends PolymerElement {
    static get template() {
        return html`
      <style include="common-styles challenges-style"></style>
      <div class="challenges">
        <h2>Are you ready to test yous skills?</h2>
        <hr />
        <div class="challenges__records">
          <dom-repeat items="{{records}}" as="record">
            <template>
              <paper-card heading="{{record.name}}" image="{{record.image}}">
                <div class="card-content">{{record.abstractDescription}}</div>
                <div class="card-actions">
                  <a href="#/challenge/{{record.id}}">
                    <paper-button>Explore</paper-button>
                  </a>
                  <paper-button on-click="_copyClipboard">Share</paper-button>
                </div>
              </paper-card>        
            </template>
          </dom-repeat>
        </div>
      </div>
    `
    }

    static get properties() {
        return {
            records: {
                type: Array
            }
        }
    }

    connectedCallback() {
        super.connectedCallback()

        getChallenges().then(challenges => this.records = challenges)
    }

    _copyClipboard(e) {
        const input = document.createElement('input')
        const href = window.location.href
        input.value = `${href.substr(0, href.length - 1)}/${e.model.record.id}`

        document.body.appendChild(input)

        input.focus()
        input.select()
        document.execCommand('copy')

        document.body.removeChild(input)

        alert('URL copied to Clipboard!')
    }
}

customElements.define('my-challenges', Challenges)
