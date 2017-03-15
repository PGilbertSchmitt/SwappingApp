import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';

import App from './app';
import Auth from './auth/auth_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute pathcomponent={Auth} /> 
        <Route path="/login" component={Auth} />
        <Route path="/signup" component={Auth} />
      </Route>
    </Router>
  </Provider>
);

export default Root;