import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';

import Item from './item';

class ItemIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchParams: (props.fetchParams || {})
    };
    this.formatItems = this.formatItems.bind(this);
  }

  componentWillReceiveProps({ fetchParams }) {
    if (!isEqual(this.state.fetchParams, fetchParams)) {
      this.props.searchItems(fetchParams);
    }
    this.setState({ fetchParams });
  }

  componentDidMount() {
    this.props.searchItems(this.props.fetchParams);
  }

  createRow(items, i) {
    return (
      <div className="row item-row" key={i}>
        {items.map((item, j) => (
          <div className="three columns item-box" key={(i * 4) + j}>
            <Item item={item} />
          </div>
        ))}
      </div>
    );
  }

  formatItems() {
    const numItems = this.props.items.length;
    let itemRows = [];
    for (let i = 0; i < numItems; i += 4) {
      let itemRow = this.props.items.slice(i, i + 4);
      itemRows.push(itemRow);
    }
    
    return itemRows.map((items, i) => this.createRow(items, i));
  }

  render() {
    return (
      <div className={`container items-index ${this.props.search ? "search-items" : ""}`}>
        {this.formatItems()}
      </div>
    );
  }
}

export default ItemIndex;