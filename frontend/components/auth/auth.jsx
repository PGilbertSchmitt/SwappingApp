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

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map(err => (
            <li>{err}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="auth-page">
        { this.renderErrors() }
        { this.renderForm() }
      </div>
    );
  }
}

export default Auth;