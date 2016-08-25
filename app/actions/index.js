import * as types from './ActionTypes';
import _getPosts from './get-posts';

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

export function openMenu(){
  return {
    type : types.OPEN_MENU
  }
}

export function closeMenu(){
  return {
    type : types.CLOSE_MENU
  }
}

export let getPosts = _getPosts;
