import { AUTH_ACTIONS } from './auth.actions';

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.UPDATE_REDIRECT_URL:
      return { ...state, redirectURL: action.payload };
    default:
      return state;
  }
};
