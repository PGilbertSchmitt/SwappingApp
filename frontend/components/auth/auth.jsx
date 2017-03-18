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
          cleanErrors={() => this.props.cleanErrors()}
          receiveError={this.props.receiveError}
          renderErrors={() => this.renderErrors(this.props.errorList)}
          login={this.props.action} />
      );
    } else {
      return (
        <Signup
          cleanErrors={this.props.cleanErrors}
          receiveError={this.props.receiveError}
          renderErrors={() => this.renderErrors(this.props.errorList)}
          signup={this.props.action} />
      );
    }
  }

  renderErrors(errors) {
    if (errors) {
      let i = 0;
      return (
        <ul className="error-list" >
          {errors.map(err => (
            <li key={i++} className="form-error">{err}</li>
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