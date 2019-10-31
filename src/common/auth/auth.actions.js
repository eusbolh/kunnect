import axios from 'axios';

export const AUTH_ACTIONS = {
  UPDATE_REDIRECT_URL: 'AUTH_UPDATE_REDIRECT_URL',
};

/**
 * updateRedirectURL(): updates redirect URL
 * @param {*} data
 */
export const updateRedirectURL = data => ({
  type: AUTH_ACTIONS.UPDATE_REDIRECT_URL,
  payload: data,
});
