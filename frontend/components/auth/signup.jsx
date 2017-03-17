import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      address: "",
      phone_number: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.cleanErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
        <h1 className="form-h1">Sign Up</h1>
        { this.props.renderErrors() }
        <label className="auth-label">Email</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('email')}
          type="text" />
        <label className="auth-label">Password</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('password')}
          type="password" />
        <label className="auth-label">Confirm Password</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('password')}
          type="password" />
        <label className="auth-label">First Name</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('email')}
          type="text" />
        <label className="auth-label">Last Name</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('email')}
          type="text" />
        <input
          className="form-button primary-button"
          type="submit"
          value="Register" />
      </form>
    );
  }
}

export default Signup;