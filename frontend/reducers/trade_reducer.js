import _ from 'lodash';

import {
  RECEIVE_TRADES,
  RECEIVE_TRADE,
  REMOVE_TRADE,
  CLEAN_TRADES
} from '../actions/trade_actions';

const defaultState = {
  incoming_trades: [],
  outgoing_trades: []
};

const tradeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = _.merge({}, state);

  switch (action.type) {
    case RECEIVE_TRADES:
      return action.trades;

    // case RECEIVE_TRADE:
    //   newState.incoming_trades = _.unionWith(
    //     newState.incoming_trades,
    //     [action.trade],
    //     (x, y) => _.isEqual(x, y)
    //   );
    //   newState.outgoing_trades = _.unionWith(
    //     newState.outgoing_trades,
    //     [action.trade],
    //     (x, y) => _.isEqual(x, y)
    //   );
    //   return newState;

    case REMOVE_TRADE:
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