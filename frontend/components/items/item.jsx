import React from 'react';

const Item = ({ item }) => (
  <div className="item-container">
    <div className="item-photo-container">
      <img
        src={window.thumbnail(item.photo_url)}
        className="item-photo" />
    </div>
    <div className="item-info-container">
      <div className="item-info-row item-name">{item.name}</div>
      <div className="item-info-row item-owner">{item.owner_name}</div>
    </div>
  </div>
);

export default Item;