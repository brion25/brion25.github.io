import * as types from './../actions/ActionTypes';

const initialState = {
  searchMode : false,
  menuOpen : false
};

function navbar(state = initialState, action){
  switch (action.type) {
    case types.ENABLE_SEARCH_MODE:
      state.searchMode = true;
      return Object.assign({},state);
    case types.DISABLE_SEARCH_MODE:
      state.searchMode = false;
      return Object.assign({},state);
    case types.OPEN_MENU:
      state.menuOpen = true;
      return Object.assign({},state);
    case types.CLOSE_MENU:
      state.menuOpen = false;
      return Object.assign({},state);
    default:
      return state;
  }
}

export default navbar;
