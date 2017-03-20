import * as UserApi from '../util/user_util_api';

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAN_USER_ERRORS = "CLEAN_USER_ERRORS";

export const receiveUserData = data => ({
  type: RECEIVE_USER_DATA,
  data
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const cleanUserErrors = () => ({
  type: CLEAN_USER_ERRORS
});

// THUNKERS

export const fetchUserData = userId => dispatch => (
  UserApi.fetchUserData(userId)
    .done(userData => dispatch(receiveUserData(userData)))
    .fail(errors => dispatch(receiveUserErrors(errors.responseJSON)))
);