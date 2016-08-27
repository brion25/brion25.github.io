import moment from 'moment';
import fetch from './../common/libraries/fetch';
import * as types from './ActionTypes';

function blogPromise(url, config){
  return fetch(url, config);
}

function getProfile(profile){
  profile.published = moment(profile.published).fromNow();
  return {
    type : types.GET_BLOGGER_PROFILE,
    profile
  }
}

function proifleError(error){
  return {
    type : types.GET_BLOGGER_PROFILE,
    posts : [],
    error
  }
}

export default function getBlogProfile(url, config){
  return function(dispatch){
    return blogPromise(url, config).then(
      blogger => dispatch(getProfile(blogger)),
      error => dispatch(proifleError(error))
    );
  }
};
