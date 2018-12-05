import moment from 'moment'
import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import challangeStyle from './challenge.scss'
import { getChallenge } from '../../services/challenges'

challangeStyle()('challenge-style')

class Challenge extends PolymerElement {
    static get template() {
        return html`
      <style include="challenge-style"></style>
      <div class="challenge">
        <h1>Challenge: {{challenge.name}}</h1>
        <div class="challenge__metadata">
          <div class="challange__created">
            <b>Created at:</b> {{challenge.createdAt}}
          </div>
          <div class="challange__updated">
            <b>Updated:</b> {{challenge.updatedAt}}
          </div>
        </div>
        <hr />
        <div class="challenge__image-wrapper">
          <img class="challenge__image" src="{{challenge.image}}" />        
        </div>
        <div class="challenge__description"></div>
      </div>
    `
    }

    static get properties() {
        return {
            params: {
                type: Object,
                observer: '_onChallengeIdChange'
            },
            challenge: Object
        }
    }

    _onChallengeIdChange() {
        if (this.params.id) {
            getChallenge(this.params.id).then(challenge => {
                const {
                    created,
                    updated,
                } = challenge

                challenge.createdAt = moment(created).format('MMM Do YYYY')
                challenge.updatedAt = moment(updated || created).fromNow()

                const container = document.createElement('p')
                container.innerHTML = challenge.html

                this.shadowRoot.querySelector('.challenge__description').appendChild(container)
                this.challenge = challenge
            })
        }
    }
}

customElements.define('my-challenge', Challenge)
