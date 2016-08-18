import { combineReducers } from 'redux';
import profile from './profile';
import navbar from './navbar';
import blog from './blog';

const rootReducer = combineReducers({
  profile,
  navbar,
  blog
});

export default rootReducer;
