import React, { Component } from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    console.log(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <h1 className="form-h1">Login</h1>
        <label className="auth-label">Email</label>
        <input
          className="u-full-width form-item"
          onChange={ this.update('email') }
          type="text" />
        <label className="auth-label">Password</label>
        <input
          className="form-item"
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