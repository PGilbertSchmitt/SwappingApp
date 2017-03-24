import _ from 'lodash';

import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from '../actions/item_actions';

const itemReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = _.merge([], state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      let newItem = {
        id: action.item.id,
        name: action.item.name,
        photo_url: action.item.photo_url,
        owner_name: action.item.owner.username
      };
      newState = _.unionWith(
        state,
        [newItem],
        (x, y) => _.isEqual(x, y)
      );
      return newState;
    case REMOVE_ITEM:
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

export default itemReducer;