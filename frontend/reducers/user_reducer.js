import { RECEIVE_USER_DATA } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_DATA:
      return action.data;
    default:
      return state;
  }
};

export default userReducer;