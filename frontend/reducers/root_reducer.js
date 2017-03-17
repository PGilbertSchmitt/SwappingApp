import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import itemReducer from './item_reducer';

export default combineReducers({
  session: authReducer,
  items: itemReducer
});