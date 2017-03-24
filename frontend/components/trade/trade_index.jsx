import React, { Component } from 'react';

import IncomingTradeItem from './incoming_trade_item';
import OutgoingTradeItem from './outgoing_trade_item';

class TradeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: {}
    };
    props.fetchTrades();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      trades: newProps.trades
    });
  }

  // destroyTrade={() => this.props.destroyTrade(trade.id)}

  renderItem(type, key, trade) {
    if (type === "incomming") {
      return (
        <IncomingTradeItem
          key={key}
          trade={trade}
          destroyTrade={() => this.props.destroyTrade(trade.id)} />
      );
    } else {
      return (
        <OutgoingTradeItem
          key={key}
          trade={trade}
          destroyTrade={() => this.props.destroyTrade(trade.id)} />
      );
    }
  }

  renderTrades(trades, type) {
    if (trades && trades.length > 0) {
      return (
        <div className="trade-item-container">
          {trades.map((trade, i) => (
            this.renderItem(type, i, trade)
          ))}
        </div>
      );
    } else {
      // No trades
      return (
        <div className="no-trades">
          No pending trades :/
        </div>
      );
    }
  }

  render() {
    return (
      <div className="trade-page">
        <h1 className="trade-page-header">Pending Trades</h1>

        <div className="trades-box">
          <h2 className="box-header">Incoming Trades</h2>
          <div className="inner-box">
            {this.renderTrades(
              this.state.trades.incoming_trades,
              "incomming"
            )}
          </div>
        </div>

        <div className="trades-box">
          <h2 className="box-header">Outgoing Trades</h2>
          <div className="inner-box">
            {this.renderTrades(
              this.state.trades.outgoing_trades,
              "outgoing"
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TradeIndex;