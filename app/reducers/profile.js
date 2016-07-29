import rawProfile from './../common/profiles/profile.json';
import * as types from './../actions/ActionTypes';

const initialState = {
  rawProfile
};

function profile(state = initialState, action){
  switch (action.type) {
    case types.GET_PROFILE:
      return Object.assign({},state);
      break;
    default:
      return state;
  }
}

export default profile;
