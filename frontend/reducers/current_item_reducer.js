import {
  RECEIVE_ITEM
} from '../actions/item_actions';

const currentItemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ITEM:
      return action.item;
    default:
      return state;
  }
};

export default currentItemReducer;