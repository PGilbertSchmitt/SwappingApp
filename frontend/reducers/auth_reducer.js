import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/auth_actions';

const defaultState = {
  currentUser: null
};

const authReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    default:
      return state;  
  }
};

export default authReducer;