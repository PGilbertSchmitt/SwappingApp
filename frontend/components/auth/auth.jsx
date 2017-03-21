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
          errors={this.props.errorList}
          login={this.props.action} />
      );
    } else {
      return (
        <Signup
          cleanErrors={this.props.cleanErrors}
          receiveError={this.props.receiveError}
          errors={this.props.errorList}
          signup={this.props.action} />
      );
    }
  }

  render() {
    return (
      <div className="form-page">
        { this.renderForm() }
      </div>
    );
  }
}

export default Auth;