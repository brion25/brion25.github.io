import rawProfile from './../profiles/profile.json';
import * as types from './../actions/ActionTypes';

const initialState = {
  profile : rawProfile
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
