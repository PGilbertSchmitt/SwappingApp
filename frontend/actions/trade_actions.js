import * as TradeApi from '../util/trade_util_api';

export const RECEIVE_TRADES = "RECEIVE_TRADES";
export const CLEAN_TRADES = "CLEAN_TRADES";

export const receiveTrades = trades => ({
  type: RECEIVE_TRADES,
  trades
});

export const cleanTrades = () => ({
  type: CLEAN_TRADES
});

// THUNKERS

export const fetchTrades = (tradeParams) => dispatch => (
  TradeApi.fetchTrades(tradeParams)
    .done(trades => dispatch(receiveTrades(trades)))
);