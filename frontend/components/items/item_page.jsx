import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        owner: {}
      },
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

  userInfo(owner) {
    if (owner) {
      const email = owner.email === "" ? "" : (<li>Email: {owner.email}</li>);
      const phoneNumber = owner.phone_number === ""
        ? "" : (<li>Phone Number: {owner.phone_number}</li>);

      return (
        <ul className="user-info-list">
          {email}
          {phoneNumber}
        </ul>
      );
    }
  }

  render() {
    const item = this.state.currentItem;
    return (
      <div className="item-page">
        <div className="item-page-half">
          <div className="item-image-container">
            <img
              className="item-image-full"
              src={window.largeImg(item.photo_url)} />
          </div>

          <div className="item-user-info">
            <h1 className="item-h1">
              Belong's to {item.owner.username}
            </h1>

            {this.userInfo(item.owner)}
          </div>
        </div>

        <div className="item-page-half">
          <div className="item-info">
            <h1 className="item-h1">
              {item.name}
            </h1>
            <p className="item-data">
              Category: {item.category}
            </p>
            <div className="item-data">
              <p className="description-tag">
                Description:<br />
              </p>

              <hr />
                  
              <p>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;