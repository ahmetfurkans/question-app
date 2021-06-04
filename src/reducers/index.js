import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
const reducers = combineReducers({
  authReducer: authReducer,
  errorReducer: errorReducer,
});

export default reducers;
