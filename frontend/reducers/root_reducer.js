import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import itemReducer from './item_reducer';
import errorReducer from './error_reducer';

export default combineReducers({
  session: authReducer,
  items: itemReducer,
  errors: errorReducer
});