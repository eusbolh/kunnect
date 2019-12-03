import { USER_ACTIONS } from './User.actions';

export default (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.FORGOT_PASSWORD:
      return state;
    case USER_ACTIONS.LOGIN:
      localStorage.setItem('token', action.payload.token);
      return state;
    default:
      return state;
  }
};
