import React, { Component } from 'react';

import Errors from '../errors';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      fname: "",
      lname: "",
      address: "",
      phone_number: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.validForm = this.validForm.bind(this);
    this.clearPasswords = this.clearPasswords.bind(this);
  }

  componentWillUnmount() {
    this.props.cleanErrors();
  }

  componentWillReceiveProps(newProps) {
    this.clearPasswords();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validForm()) {
      let filteredState = this.state;
      delete filteredState.confirmPassword;
      this.props.signup(filteredState);
    } else {
      this.clearPasswords();
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  validForm() {
    let valid = true;
    
    const password = this.state.password;
    const confirm = this.state.confirmPassword;
    if (password !== confirm) {
      this.props.receiveError("Passwords do not match");
      valid = false;
    }

    const phoneRegex = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
    
    if (this.state.phone_number.length > 0) {
      if (!this.state.phone_number.match(phoneRegex)) {
        this.props.receiveError("Phone number not valid (xxx)-xxx-xxxx");
        valid = false;
      }
    }

    return valid;
  }

  clearPasswords() {
    // Passwords should be wiped between tries for security
    this.setState({
      password: "",
      confirmPassword: ""
    });

    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="form-h1">Sign Up</h1>
        <Errors errors={this.props.errors} />
        <label className="form-label">Email</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('email')}
          type="text" />
        <label className="form-label">Password</label>
        <input
          id="password"
          className="form-item u-full-width"
          onChange={this.update('password')}
          type="password" />
        <label className="form-label">Confirm Password</label>
        <input
          id="confirm-password"
          className="form-item u-full-width"
          onChange={this.update('confirmPassword')}
          type="password" />
        <label className="form-label">First Name</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('fname')}
          type="text" />
        <label className="form-label">Last Name</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('lname')}
          type="text" />
        <label className="form-label">Phone Number</label>
        <input
          className="form-item u-full-width"
          onChange={this.update('phone_number')}
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