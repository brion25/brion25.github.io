import '@polymer/iron-form/iron-form'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-input/paper-textarea'
import '@polymer/paper-button'
import '@polymer/iron-icons'
import { html, PolymerElement } from '@polymer/polymer/polymer-element'

import '../utils/shared-styles'
import '../components/svg'
import '../components/link/link'
import contactStyle from './contact.scss'
import { sendEmail } from '../services/contact'

contactStyle()('contact-style')

const DEFAULT_SEND_MSG = 'Send It'

class Contact extends PolymerElement {
  static get template() {
    return html`
      <style include="common-styles contact-style"></style>
      <div class="contact">
        <h2>Contact Me</h2>
        <hr />
        <p class="contact__message">
          You can connect with me through 
          <my-link href="https://www.linkedin.com/in/brion25" text="LinkedIn" icon="linkedin"></my-link>
          or send me an email using the form below:
        </p>
        <iron-form id="contactForm" allow-redirect="false">
          <form class="contact__form">
            <h3 class="contact__header">Contact me!</h3>
            <paper-input class="contact__iron-input contact__form-input" name="recluiterName" label="Name" value="" required>
              <iron-icon icon="face" slot="prefix"></iron-icon>
            </paper-input>
            <paper-input class="contact__iron-input contact__form-input" name="recluiterEmail" label="Email" value="" type="email" required>
              <iron-icon icon="mail" slot="prefix"></iron-icon>
            </paper-input>
            <paper-textarea class="contact__iron-input contact__form-notes" name="recluiterNotes" label="Notes (The field is auto-sizing)" required></paper-textarea>
            <paper-button on-tap="_submit" class="contact__form-submit" raised disabled="{{disableSendMsgBtn}}">
              <iron-icon icon="send"></iron-icon>
              {{sendMsgBtn}}
            </paper-button>          
          </form>
        </iron-form>
      </div>
    `
  }

  static get properties() {
    return {
      sendMsgBtn: {
        type: String
      },
      disableSendMsgBtn: {
        type: Boolean
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.sendMsgBtn = DEFAULT_SEND_MSG
    this.disableSendMsgBtn = false
  }

  _submit() {
    this.sendMsgBtn = DEFAULT_SEND_MSG
    const form = this.$.contactForm

    if (form.validate()) {
      this.sendMsgBtn = 'Sending...'
      this.disableSendMsgBtn = true
      const body = form.serializeForm()
      sendEmail(body)
        .then(() => {
          this.sendMsgBtn = 'Email Sent!'
          this.disableSendMsgBtn = false
        })
        .catch(() => {
          this.sendMsgBtn = 'Something went wrong, try again later...'
          this.disableSendMsgBtn = false
        })
    }
  }
}

customElements.define('my-contact', Contact)
