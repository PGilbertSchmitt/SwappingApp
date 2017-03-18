import * as AuthApi from '../util/auth_util_api';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_AUTH_ERRORS = "RECEIVE_AUTH_ERRORS";
export const RECEIVE_AUTH_ERROR = "RECEIVE_AUTH_ERROR";
export const CLEAN_AUTH_ERRORS = "CLEAN_AUTH_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveAuthErrors = errors => ({
  type: RECEIVE_AUTH_ERRORS,
  errors
});

export const receiveAuthError = error => ({
  type: RECEIVE_AUTH_ERROR,
  error
});

export const cleanAuthErrors = () => ({
  type: CLEAN_AUTH_ERRORS
});

// THUNKERS

export const signup = user => dispatch => (
  AuthApi.signup(user)
    .done(userBack => {
      dispatch(receiveCurrentUser(userBack));
      hashHistory.push('/');
    })
    .fail(errors => dispatch(receiveAuthErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  AuthApi.login(user)
    .done(userBack => {
      dispatch(receiveCurrentUser(userBack));
      hashHistory.push('/');
    })
    .fail(errors => dispatch(receiveAuthErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  AuthApi.logout()
    .done(userBack => dispatch(receiveCurrentUser(userBack)))
    .fail(errors => dispatch(receiveAuthErrors(errors)))
);

// For testing only
window.signup = signup;
window.login = login;
window.logout = logout;