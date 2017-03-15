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
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            onChange={this.update('email')}
            type="text" />
        </label>
        <label>
          Password
          <input
            onChange={this.update('password')}
            type="password" />
        </label>
        <label>
          Confirm Password
          <input
            onChange={this.update('password')}
            type="password" />
        </label>
        <label>
          First Name
          <input
            onChange={this.update('email')}
            type="text" />
        </label>
        <label>
          Last Name
          <input
            onChange={this.update('email')}
            type="text" />
        </label>
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default Signup;