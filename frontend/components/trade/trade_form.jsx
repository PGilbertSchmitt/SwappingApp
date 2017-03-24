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
    this.renderErrors = this.renderErrors.bind(this);
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
    } // TODO: Add error handling for bad trades
  }

  renderErrors() {
    if (this.props.tradeErrors.length > 0) {
      return this.props.tradeErrors.map((error, i) => (
        <h1 key={i} className="trade-error">{error}</h1>
      ));
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

            {this.renderErrors()}

            <button className="primary-button" onClick={this.handleSubmit}>
              Trade
            </button>
          </div>
        );
      } else {
        return (
          <h1 className="trade-error">Add items to your store to enable trading</h1>
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