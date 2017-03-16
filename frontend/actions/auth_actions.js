import * as AuthApi from '../util/auth_util_api';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// THUNKERS

export const signup = user => dispatch => (
  AuthApi.signup(user)
    .done(userBack => {
      dispatch(receiveCurrentUser(userBack));
      hashHistory.push('/');
    })
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  AuthApi.login(user)
    .done(userBack => {
      dispatch(receiveCurrentUser(userBack));
      hashHistory.push('/');
    })
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  AuthApi.logout()
    .done(userBack => dispatch(receiveCurrentUser(userBack)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

window.signup = signup;
window.login = login;
window.logout = logout;