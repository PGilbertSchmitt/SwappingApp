import merge from 'lodash/merge';
import some from 'lodash/some';

import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from '../actions/item_actions';

const itemReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      // No repeats
      if (!some(newState, action.item)) {
        newState.push(action.item);
      }
      return newState;
    case REMOVE_ITEM:
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

export default itemReducer;