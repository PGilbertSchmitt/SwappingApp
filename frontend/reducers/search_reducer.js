import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_PARAMS,
  RECEIVE_SEARCH_PARAM,
  CLEAN_SEARCH_PARAMS
} from '../actions/search_actions';

const defaultState = {
  category: 'all',
  search_words: []
};

const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_PARAMS:
      return action.params;
    case RECEIVE_SEARCH_PARAM:
      return merge({}, state, action.param);
    case CLEAN_SEARCH_PARAMS:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;