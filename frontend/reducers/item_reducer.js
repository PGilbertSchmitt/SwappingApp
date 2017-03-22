import merge from 'lodash/merge';
import some from 'lodash/some';

import {
  RECEIVE_ITEMS,
  REMOVE_ITEM
} from '../actions/item_actions';

const itemReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case REMOVE_ITEM:
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

export default itemReducer;