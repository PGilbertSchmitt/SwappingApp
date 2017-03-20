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
    props.cleanUserErrors();
    this.fetchParams = this.fetchParams.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.isCurrentUser = this.isCurrentUser.bind(this);
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

  isCurrentUser() {
    const currentUser = this.props.currentUser;
    const user = this.state.user;

    return currentUser && (currentUser.id === parseInt(this.state.user_id))
      ? true : false;
  }

  renderHeader() {
    if (this.isCurrentUser()) {
      return (
        <h1 className="garage-header">My Items</h1>
      );
    } else {
      return (
        <h1 className="garage-header">
          {this.state.user.username}'s garage
        </h1>
      );
    }
  }

  renderErrors() {
    return this.props.userErrors.map((error, i) => (
      <h1 className="garage-header error-header" key={i}>{error}</h1>
    ));
  }

  renderForm() {
    if (this.isCurrentUser()) {
      return (
        <h1>Form goes here</h1>
      );
    }
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
          {this.renderHeader()}
          <ItemIndex fetchParams={this.fetchParams()} />
          {this.renderForm()}
        </div>
      );
    }
  }
}

export default Garage;