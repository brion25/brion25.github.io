import { postJSON } from '../utils/fetch'

export const sendEmail = (data) => {
  const body = {
    emails: [{
      ...data,
      email: 'car_25_ixco@hotmail.com'
    }],
    subject: 'Someone wants to get in touch!'
  }

  return postJSON('https://us-central1-project-takama.cloudfunctions.net/api/mailer', body, {
    headers: {
      'client-id': ENV_MAILER_ID
    }
  })
}
