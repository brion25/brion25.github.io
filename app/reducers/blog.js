import fetch from './../common/libraries/fetch';

import * as types from './../actions/ActionTypes';

const initialState = {
  items : [],
  error : null
}

function blog(state = initialState, action){
  switch(action.type){
    case types.GET_POSTS:
      state.items = action.posts;
      state.error = action.error;
      return Object.assign({},state);
    default:
      return state;
  }
}

export default blog;
