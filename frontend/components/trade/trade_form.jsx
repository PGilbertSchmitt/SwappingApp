import React, { Component } from 'react';

class TradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null,
      currentUserId: props.currentUser.id,
      offerItemId: null,
      receiverId: props.receiverId,
      requestItemId: props.requestItemId
    };
    props.getListings(props.currentUser.id);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.currentUserId !== newProps.currentUser.id) {
      this.props.getListings(newProps.currentUser.id);
    }
    this.setState({
      currentUserId: newProps.currentUser.id,
      listings: newProps.listings
    });
  }

  update(e) {
    this.setState({ offerItemId: e.target.value }, () => console.log("BOOP!"));
  }

  handleSubmit() {
    if (this.state.offerItemId) {
      let trade = {
        requester_id: this.state.currentUserId,
        receiver_id: this.state.receiverId,
        request_item_id: this.state.requestItemId,
        offer_item_id: this.state.offerItemId
      };
      this.props.createTrade(trade);
    }
  }

  render() {
    const listings = this.state.listings;
    if (listings) {
      if (listings.length > 0) {
        return (
          <div>
            <select
              defaultValue="---"
              className="trade-options"
              onChange={this.update}>
              <option disabled>---</option>
              {listings.map((l, i) => (
                <option key={i} value={l.id}>{l.name}</option>
              ))}
            </select>

            <button className="primary-button" onClick={this.handleSubmit}>
              Trade
            </button>
          </div>
        );
      } else {
        return (
          <h1>Add items to your store to enable trading</h1>
        );
      }
    } else {
      return (
        <div></div>
      );
    }
  }
}

// Coding ninja watches you from the shadows of the comments
// Q|-<

export default TradeForm;