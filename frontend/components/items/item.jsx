import React from 'react';

const Item = props => (
  <div className="item-container">
    <div className="item-photo-container">
      <img src="assets/images/test.png" className="item-photo" />
    </div>
    <div className="item-info-container">
      <div>Name</div>
      <div>Owner</div>
    </div>
  </div>
);

export default Item;