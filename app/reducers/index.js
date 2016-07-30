import { combineReducers } from 'redux';
import profile from './profile';
import navbar from './navbar';

const rootReducer = combineReducers({
  profile,
  navbar
});

export default rootReducer;
