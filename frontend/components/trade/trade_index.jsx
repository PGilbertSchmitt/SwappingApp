import React, { Component } from 'react';

import TradeIndexItem from './trade_index_item';

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

  renderTrades(trades) {
    if (trades && trades.length > 0) {
      return (
        <div className="trade-item-container">
          {trades.map((trade, i) => (
            <TradeIndexItem key={i} trade={trade} />
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
            {this.renderTrades(this.state.trades.incoming_trades)}
          </div>
        </div>

        <div className="trades-box">
          <h2 className="box-header">Outgoing Trades</h2>
          <div className="inner-box">
            {this.renderTrades(this.state.trades.outgoing_trades)}
          </div>
        </div>
      </div>
    );
  }
}

export default TradeIndex;