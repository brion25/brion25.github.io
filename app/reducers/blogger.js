import fetch from './../common/libraries/fetch';

import * as types from './../actions/ActionTypes';

const initialState = {
  profile : {},
  author : {},
  items : [],
  error : null
}

function blogger(state = initialState, action){
  switch(action.type){
    case types.GET_BLOGGER_POSTS:
      state.author = action.author;
      state.items = action.posts;
      state.error = action.error;
      return Object.assign({},state);
    case types.GET_BLOGGER_PROFILE:
      state.profile = action.profile;
      return Object.assign({},state);
    default:
      return state;
  }
}

export default blogger;
