import * as types from './../actions/ActionTypes';

const initialState = {
  searchMode : false
};

function menu(state = initialState, action){
  switch (action.type) {
    case types.ENABLE_SEARCH_MODE:
      state.searchMode = true;
      return Object.assign({},state);
    case types.DISABLE_SEARCH_MODE:
      state.searchMode = false;
      return Object.assign({},state);
    default:
      return state;
  }
}

export default menu;
