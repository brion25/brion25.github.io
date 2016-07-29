import * as types from './ActionTypes';

export function getProfile(){
  return {
    type : types.GET_PROFILE
  }
}

export function enableSearchMode(){
  return {
    type : types.ENABLE_SEARCH_MODE
  }
}

export function disableSearchMode(){
  return {
    type : types.DISABLE_SEARCH_MODE
  }
}
