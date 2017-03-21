import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import itemReducer from './item_reducer';
import errorReducer from './error_reducer';
import userReducer from './user_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  session: authReducer,
  items: itemReducer,
  errors: errorReducer,
  user: userReducer,
  searchParams: searchReducer
});