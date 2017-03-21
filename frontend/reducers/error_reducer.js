import merge from 'lodash/merge';

import {
  RECEIVE_AUTH_ERRORS,
  RECEIVE_AUTH_ERROR,
  CLEAN_AUTH_ERRORS
} from '../actions/auth_actions';

import {
  RECEIVE_ITEM_ERRORS,
  RECEIVE_ITEM_ERROR,
  CLEAN_ITEM_ERRORS
} from '../actions/item_actions';

import {
  RECEIVE_USER_ERRORS,
  CLEAN_USER_ERRORS
} from '../actions/user_actions';

const defaultState = {
  auth: [],
  item: [],
  user: []
};

// Should maybe break up into multiple error reducers;

const errorReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_AUTH_ERRORS:
      newState.auth = action.errors;
      return newState;
    case RECEIVE_AUTH_ERROR:
      // No repeated errors 
      if (newState.auth.indexOf(action.error) === -1) {
        newState.auth.push(action.error);
      }
      return newState;
    case CLEAN_AUTH_ERRORS:
      newState.auth = [];
      return newState;
    case RECEIVE_ITEM_ERRORS:
      newState.item = action.errors;
      return newState;
    case RECEIVE_ITEM_ERROR:
      // No repeated errors
      if (newState.item.indexOf(action.error) === -1) {
        newState.item.push(action.error);
      }
      return newState;
    case CLEAN_ITEM_ERRORS:
      newState.item = [];
      return newState;
    case RECEIVE_USER_ERRORS:
      newState.user = action.errors;
      return newState;
    case CLEAN_USER_ERRORS:
      newState.user = [];
      return newState;
    default:
      return state;
  }
};

export default errorReducer;