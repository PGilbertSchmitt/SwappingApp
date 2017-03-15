import React, { Component } from 'react';

import Login from './login';
import Signup from './signup';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  renderForm() {
    if (this.props.formType === "login") {
      return (
        <Login login={this.props.action} />
      );
    } else {
      return (
        <Signup signup={this.props.action} />
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderForm() }
      </div>
    );
  }
}

export default Auth;