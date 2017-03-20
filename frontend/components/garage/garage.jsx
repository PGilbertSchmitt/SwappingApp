import React, { Component } from 'react';

import ItemIndex from '../items/item_index_container';

class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.params.user_id,
      user: {
        username: ""
      }
    };
    props.fetchUserData(this.state.user_id);
    this.fetchParams = this.fetchParams.bind(this);
    this.header = this.header.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.params.user_id !== this.state.user_id) {
      this.props.fetchUserData(props.params.user_id);
      this.props.cleanUserErrors();
    }

    this.setState({
      user_id: props.params.user_id,
      user: props.user
    });
  }

  fetchParams() {
    return {
      user_id: this.state.user_id,
      category: "all"
    };
  }

  header() {
    const currentUser = this.props.currentUser;
    const user = this.state.user;

    if (currentUser && (currentUser.id === parseInt(this.state.user_id))) {
      return (
        <h1 className="garage-header">My Items</h1>
      );
    } else {
      return (
        <h1 className="garage-header">
          {user.username}'s garage
        </h1>
      );
    }
  }

  renderErrors() {
    return this.props.userErrors.map(error => (
      <h1 className="garage-header error-header">{error}</h1>
    ));
  }

  render() {
    if (this.props.userErrors.length > 0) {
      return (
        <div className="garage-container">
          {this.renderErrors()}
        </div>
      );
    } else {
      return (
        <div className="garage-container">
          {this.header()}
          <ItemIndex fetchParams={this.fetchParams()} />
        </div>
      );
    }
  }
}

export default Garage;