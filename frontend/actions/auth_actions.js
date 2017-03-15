import * as AuthApi from '../util/auth_util_api';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: receiveErrors,
  errors
});

// THUNKERS

export const signup = user => dispatch => (
  AuthApi.signup(user)
    .done(userBack => dispatch(receiveCurrentUser(userBack)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const login = user => dispatch => (
  AuthApi.login(user)
    .done(userBack => dispatch(receiveCurrentUser(userBack)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  AuthApi.logout()
    .done(userBack => dispatch(receiveCurrentUser(userBack)))
    .fail(errors => dispatch(receiveErrors(errors)))
);