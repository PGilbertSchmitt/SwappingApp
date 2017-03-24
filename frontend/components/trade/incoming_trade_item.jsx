import React from 'react';
import { Link } from 'react-router';

const IncomingTradeItem = (props) => {
  const trade = props.trade;
  return (
    <div className="trade-item">
      <div className="trade-info">
        <Link to={`/${trade.requester.id}/garage`}>
          {trade.requester.name}'s
        </Link>&nbsp;<Link to={`/items/${trade.requester.item.id}`}>
          {trade.requester.item.name}
        </Link>&nbsp;for your&nbsp;<Link to={`/items/${trade.receiver.item.id}`}>
          {trade.receiver.item.name}
        </Link>
      </div>

      <div className="trade-info">
        <button
          className="primary-button trade-button nice"
          onClick={props.updateTrade}>
          Accept
        </button>

        <button
          className="primary-button trade-button mean"
          onClick={props.destroyTrade}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default IncomingTradeItem;