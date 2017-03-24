import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_PARAMS,
  RECEIVE_SEARCH_PARAM,
  CLEAN_SEARCH_PARAMS
} from '../actions/search_actions';

const defaultState = {
  category: 'all',
  user_id: null,
  non_self: false,
  search_words: []
};

const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_PARAMS:
      return action.params;
    case RECEIVE_SEARCH_PARAM:
      const newState = merge({}, state, action.param);
      return newState;
    case CLEAN_SEARCH_PARAMS:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;