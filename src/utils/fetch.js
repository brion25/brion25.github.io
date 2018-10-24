const getHeaders = opts => {
  const headersConfig = {
  ...(opts.headers || {}),
    'Content-Type': 'application/json'
  }

  const headers = new Headers()

  for(const header in headersConfig) {
    headers.append(header, headersConfig[header])
  }

  return headers
}

const request = (endpoint, opts) => {
  const headers = getHeaders(opts)

  const options = {
    ...opts,
    headers
  }

  return fetch(endpoint, options).then(async response => {
    const json = await response.json()
    if (!response.ok) {
      return Promise.reject(json)
    }

    return Promise.resolve(json)
  })
}

export const postJSON = (endpoint, data, opts) => {
  const options = {
    ...opts,
    method: 'POST',
    body: JSON.stringify(data)
  }

  return request(endpoint, options)
}
