import React from 'react';

const limitSize = (str) => {

};

const Item = ({ item }) => (
  <div className="item-container">
    <div className="item-photo-container">
      <img src="assets/images/test.png" className="item-photo" />
    </div>
    <div className="item-info-container">
      <div className="item-info-row item-name">{item.name}</div>
      <div className="item-info-row item-owner">{item.owner}</div>
    </div>
  </div>
);

export default Item;