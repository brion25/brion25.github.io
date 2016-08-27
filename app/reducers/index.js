import { combineReducers } from 'redux';
import profile from './profile';
import navbar from './navbar';
import blogger from './blogger';

const rootReducer = combineReducers({
  profile,
  navbar,
  blogger
});

export default rootReducer;
