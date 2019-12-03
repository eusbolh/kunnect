import { USER_ACTIONS } from './User.actions';

export default (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.FORGOT_PASSWORD:
      return state;
    case USER_ACTIONS.LOGIN:
      // TODO: Add token to local storage
      return state;
    default:
      return state;
  }
};
