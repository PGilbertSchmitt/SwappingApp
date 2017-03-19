import React, { Component } from 'react';

import Item from './item';

class ItemIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchParams: (props.fetchParams || {})
    };
    props.searchItems(this.state.fetchParams);
    this.formatItems = this.formatItems.bind(this);
  }

  componentWillReceiveProps({ fetchParams }) {
    this.setState({ fetchParams });
    console.log(this.props.items);
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
      <div className="container items-index">
        {this.formatItems()}
      </div>
    );
  }
}

export default ItemIndex;