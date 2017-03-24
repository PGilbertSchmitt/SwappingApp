import React from 'react';
import { Link } from 'react-router';

const renderGarageLink = (currentUserId) => {
  if (currentUserId) {
    return (
      <Link to={`/${currentUserId}/garage`}>garage</Link>
    );
  } else {
    return (
      <Link to="/login">garage</Link>
    );
  }
};

const Banner = props => (
  <div className="banner">
    <div className="banner-text">
      <h1 className="First">
        Welcome to Swappin Up, your personal garage sale
      </h1>
      <h1 className="Second">
        Add some items to your {renderGarageLink(props.currentUserId)}
      </h1>
      <h1 className="Third">
        And start trading!
      </h1>
    </div>
  </div>
);

export default Banner;