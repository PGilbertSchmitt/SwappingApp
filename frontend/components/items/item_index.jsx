import React, { Component } from 'react';

import Item from './item';

class ItemIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchParams: {}
    };
  }

  componentWillReceiveProps({ fetchParams }) {
    this.setState({ fetchParams });
  }

  render() {
    return (
      <div className="container items-index">
        <div className="row item-row">
          <div className="three columns item-box">
            <Item />
          </div>
          <div className="three columns item-box">
            <Item />
          </div>
          <div className="three columns item-box">
            <Item />
          </div>
          <div className="three columns item-box">
            <Item />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemIndex;