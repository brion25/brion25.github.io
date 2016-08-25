import _fetch from 'isomorphic-fetch';

function fetch(url, config){
  return _fetch(url,config)
    .then((response) => {
      if(response.status >= 400) return Promise.reject('Bad response from server');
      else return response.json();
    },(err) => Promise.reject(err));
}

export default fetch;
