import * as UserApi from '../util/user_util_api';

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

export const receiveUserData = data => ({
  type: RECEIVE_USER_DATA,
  data
});

// THUNKERS

export const fetchUserData = userId => dispatch => (
  UserApi.fetchUserData(userId)
    .done(userData => dispatch(receiveUserData(userData)))
);