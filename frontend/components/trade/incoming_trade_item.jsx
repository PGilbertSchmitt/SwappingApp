import React from 'react';
import { Link } from 'react-router';

const IncomingTradeItem = ({ trade }) => {
  return (
    <div className="trade-item">
      <div className="trade-info">
        <Link to={`/items/${trade.requester.item.id}`}>
          &nbsp;{trade.requester.item.name}&nbsp;
        </Link> for <Link to={`/${trade.receiver.id}/garage`}>
          &nbsp;{trade.receiver.name}&nbsp;
        </Link>'s <Link to={`/items/${trade.receiver.item.id}`}>
          &nbsp;{trade.receiver.item.name}&nbsp;
        </Link>
      </div>

      <div className="trade-info">
        <button className="primary-button trade-button nice">
          Accept
        </button>

        <button
          className="primary-button trade-button mean">
          Remove
        </button>
      </div>
    </div>
  );
};

export default IncomingTradeItem;