import {
  RECEIVE_TRADES,
  CLEAN_TRADES
} from '../actions/trade_actions';

const tradeReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRADES:
      return action.trades;
    case CLEAN_TRADES:
      return [];
    default:
      return state;
  }
};

export default tradeReducer;