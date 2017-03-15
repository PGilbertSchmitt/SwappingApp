import React from 'react';
import ReactDOM from 'react-dom';

// import configureStore from './store/store';
import Root from './components/root';
import * as Auth from './util/auth_util_api';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();
  ReactDOM.render(<Root />, root);
});