import React from 'react';

const thumbnail = path => {
  return `https://res.cloudinary.com/swappinup/image/upload/w_200,h_150,c_fill/${path}`;
};

const Item = ({ item }) => (
  <div className="item-container">
    <div className="item-photo-container">
      <img
        src={thumbnail(item.photo_url)}
        className="item-photo" />
    </div>
    <div className="item-info-container">
      <div className="item-info-row item-name">{item.name}</div>
      <div className="item-info-row item-owner">{item.owner}</div>
    </div>
  </div>
);

export default Item;