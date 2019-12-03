import axios from 'axios';
import { loginAPI } from 'common/api/Api.functions';
import { getResponseData } from 'common/api/Api.helpers';

export const USER_ACTIONS = {
  CHANGE_PASSWORD: 'U_CHANGE_PASSWORD',
  CREATE_USER: 'U_CREATE_USER',
  FORGOT_PASSWORD: 'U_FORGOT_PASSWORD',
  GET_USER_DATA: 'U_GET_USER_DATA',
  LOGIN: 'U_LOGIN',
  VERIFY_EMAIL: 'U_VERIFY_EMAIL',
};

/* Login */

const loginSuccess = data => ({
  type: USER_ACTIONS.LOGIN,
  payload: data,
});

export const login = data => dispatch => (
  axios.post(loginAPI(), {
    username: data.username,
    password: data.password,
  })
    .then((response) => {
      dispatch(loginSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    })
);
