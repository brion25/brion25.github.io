import * as types from './../actions/ActionTypes';

const initialState = {
  searchMode : false
};

function menu(state = initialState, action){
  switch (action.type) {
    case types.ENABLE_SEARCH_MODE:
      state.searchMode = true;
      return Object.assign({},state);
      break;
    case types.DISABLE_SEARCH_MODE:
      state.searchMode = false;
      return Object.assign({},state);
      break;
    default:
      return state;
  }
}

export default menu;
