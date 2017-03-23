import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import itemReducer from './item_reducer';
import listingReducer from './listing_reducer';
import currentItemReducer from './current_item_reducer';
import errorReducer from './error_reducer';
import userReducer from './user_reducer';
import searchReducer from './search_reducer';
import tradeReducer from './trade_reducer';

export default combineReducers({
  session: authReducer,
  items: itemReducer,
  listings: listingReducer,
  currentItem: currentItemReducer,
  errors: errorReducer,
  user: userReducer,
  searchParams: searchReducer,
  trades: tradeReducer
});