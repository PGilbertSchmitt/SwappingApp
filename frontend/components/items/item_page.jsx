import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      itemId: null
    };
  }

  componentDidMount() {
    this.setState({ itemId: this.props.params.itemId });
    this.props.getItem(this.props.params.itemId);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.itemId !== newProps.params.itemId) {
      this.props.getItem(newProps.params.itemId);
    }

    this.setState({
      currentItem: newProps.currentItem,
      itemId: newProps.params.itemId
    });
  }

  render() {
    console.log(this.state.currentItem);
    return (
      <div className="item-page">
        <div className="item-page-half">
          <div className="item-image-container">
            <img className="item-image-full" src="assets/images/test.png" />
          </div>

          <div className="item-user-info">
            <h1>
              
            </h1>
          </div>
        </div>

        <div className="item-page-half">
          <div className="item-info">

          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;