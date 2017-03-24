import _ from 'lodash';

import {
  RECEIVE_TRADES,
  RECEIVE_TRADE,
  REMOVE_TRADE,
  CLEAN_TRADES
} from '../actions/trade_actions';

const tradeReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRADES:
      return action.trades;
    case REMOVE_TRADE:
      let newState = _.merge({}, state);
      newState.incoming_trades = _.filter(newState.incoming_trades, el => (
        !_.isEqual(el, action.trade)
      ));
      newState.outgoing_trades = _.filter(newState.outgoing_trades, el => (
        !_.isEqual(el, action.trade)
      ));
      return newState;
    case CLEAN_TRADES:
      return [];
    default:
      return state;
  }
};

export default tradeReducer;