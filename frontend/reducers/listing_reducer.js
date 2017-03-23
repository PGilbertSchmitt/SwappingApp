import { RECEIVE_LISTINGS } from '../actions/item_actions';

const listingReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.items;
    default:
      return state;
  }
};

export default listingReducer;