import merge from 'lodash/merge';

import {
  RECEIVE_AUTH_ERRORS,
  CLEAN_AUTH_ERRORS
} from '../actions/auth_actions';

const defaultState = {
  auth: [],
  items: []
};

const errorReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_AUTH_ERRORS:
      newState.auth = action.errors;
      return newState;
    case CLEAN_AUTH_ERRORS:
      newState.auth = [];
      return newState;
    default:
      return state;
  }
};

export default errorReducer;