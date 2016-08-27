import * as types from './ActionTypes';
import _getPosts from './get-posts';
import _getBlogProfile from './get-blogger-profile';

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

export let getBloggerPosts = _getPosts;

export let getBloggerProfile = _getBlogProfile.bind(null,`https://www.googleapis.com/blogger/v2/blogs/${process.env.BLOGGER_ID}?key=${process.env.GOOGLE_KEY}`,null,types.GET_BLOGGER_PROFILE);
