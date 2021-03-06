import React, { Component } from 'react';

import Errors from '../errors';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.cleanErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="form-h1">Login</h1>
        <Errors errors={this.props.errors} />
        <label className="form-label">Email</label>
        <input
          className="u-full-width form-item"
          onChange={ this.update('email') }
          type="text" />
        <label className="form-label">Password</label>
        <input
          className="u-full-width form-item"
          onChange={ this.update('password') }
          type="password" />
        <input
          className="form-button primary-button"
          type="submit"
          value="Login" />
      </form>
    );
  }
}

export default Login;