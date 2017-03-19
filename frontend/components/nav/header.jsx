import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.demo = this.demo.bind(this);
    this.navItems = this.navItems.bind(this);
  }

  demo() {
    const demoUser = {
      email: "demo@swappinup.com",
      password: "password"
    }
    this.props.login(demoUser);
  }

  navItems() {
    if (this.props.currentUser) {
      const user = this.props.currentUser;
      return (
        <ul className="nav-list">
          <Link to={`/${user.id}/garage`}>
            <li className="nav-item">Garage</li>
          </Link>
          <Link to="/trades">
            <li className="nav-item">Trades</li>
          </Link>
          <li className="nav-item">
            <i className="fa fa-user" alt="User Profile"></i>
            <ul className="dropdown-menu">
              <Link to="/account">
                <li className="dropdown-item">Profile</li>
              </Link>
              <li className="dropdown-item" onClick={this.props.logout}>
                Logout
              </li>
            </ul>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-list">
          <li className="nav-item" onClick={this.demo}>Demo</li>
          <Link to="/login"><li className="nav-item">Login</li></Link>
          <Link to="/signup"><li className="nav-item">Sign Up</li></Link>
        </ul>
      );
    }
  }

  render() {
    return (
      <header className="u-full-width">
        <div className="header-bar">
          <Link to="/">
            <div className="logo">SwappinUp</div>
          </Link>

          <nav className="header-nav">
            { this.navItems() }
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;