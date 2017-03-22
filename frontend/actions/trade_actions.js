import * as TradeApi from '../util/trade_util_api';

export const RECEIVE_TRADES = "RECEIVE_TRADES";
export const RECEIVE_TRADE = "RECEIVE_TRADE";
export const REMOVE_TRADE = "REMOVE_TRADE";
export const CLEAN_TRADES = "CLEAN_TRADES";

export const receiveTrades = trades => ({
  type: RECEIVE_TRADES,
  trades
});

export const receiveTrade = trade => ({
  type: RECEIVE_TRADE,
  trade
});

export const removeTrade = trade => ({
  type: REMOVE_TRADE,
  trade
});

export const cleanTrades = () => ({
  type: CLEAN_TRADES
});

// THUNKERS

export const fetchTrades = () => dispatch => (
  TradeApi.fetchTrades()
    .done(trades => dispatch(receiveTrades(trades)))
);

export const createTrade = tradeIn => dispatch => (
  TradeApi.createTrade(tradeIn)
    .done(trade => dispatch(createTrade(trade)))
);

export const updateTrade = tradeIn => dispatch => (
  TradeApi.createTrade(tradeIn)
    .done(trade => dispatch(updateTrade(trade)))
);

export const destoyTrade = tradeId => dispatch => (
  TradeApi.destroyTrade(tradeId)
    .done(trade => dispatch(destoyTrade(trade)))
);