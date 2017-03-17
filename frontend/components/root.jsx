import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';

import App from './app';
import Auth from './auth/auth_container';
import Home from './home/home.jsx';

class Root extends Component {
  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace("/");
    }
  }

  render() {
    const store = this.props.store;
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route
              path="/login" 
              component={Auth}
              onEnter={this._redirectIfLoggedIn} />
            <Route 
              path="/signup" 
              component={Auth}
              onEnter={this._redirectIfLoggedIn}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;