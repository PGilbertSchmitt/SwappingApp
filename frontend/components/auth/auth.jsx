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
        <Login
          renderErrors={() => this.renderErrors(this.props.errors)}
          login={this.props.action} />
      );
    } else {
      return (
        <Signup
          renderErrors={() => this.renderErrors(this.props.errors)}
          signup={this.props.action} />
      );
    }
  }

  renderErrors(errors) {
    if (errors) {
      return (
        <ul className="error-list" >
          {errors.map(err => (
            <li className="form-error">{err}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="auth-page">
        { this.renderForm() }
      </div>
    );
  }
}

export default Auth;