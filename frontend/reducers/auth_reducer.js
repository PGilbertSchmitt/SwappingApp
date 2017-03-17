import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAN_ERRORS
} from '../actions/auth_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const authReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAN_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;  
  }
};

export default authReducer;