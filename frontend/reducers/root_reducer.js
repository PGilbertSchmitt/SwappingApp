import { combineReducers } from 'redux';

import authReducer from './auth_reducer';

export default combineReducers({
  session: authReducer
});