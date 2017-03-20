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
  }

  componentWillReceiveProps(props) {
    if (props.params.user_id !== this.state.user_id) {
      this.props.fetchUserData(props.params.user_id);
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
    console.log(currentUser.id)
    console.log(this.state.user_id);

    // console.log(user);
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

  render() {
    // console.log("Rendering Garage");
    return (
      <div className="garage-container">
        {this.header()}
        <ItemIndex fetchParams={this.fetchParams()} />
      </div>
    );
  }
}
export default Garage;