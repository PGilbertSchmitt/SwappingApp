import {
  RECEIVE_CURRENT_ITEM
} from '../actions/item_actions';

const currentItemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_ITEM:
      return action.item;
    default:
      return state;
  }
};

export default currentItemReducer;