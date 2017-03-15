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
      <form onSubmit={ this.handleSubmit }>
        <label>
          Email
          <input
            onChange={ this.update('email') }
            type="text" />
        </label>
        <label>
          Password
          <input
            onChange={ this.update('password') }
            type="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;