import axios from 'axios';
import { loginAPI, forgotPasswordAPI, changePasswordAPI, createUserAPI, verifyMailAPI, getUserDataAPI } from 'common/api/Api.functions';
import { getResponseData, getErrorDetails, getErrorData } from 'common/api/Api.helpers';
import { addNotification } from 'common/notifications/Notifications.actions';

export const USER_ACTIONS = {
  CHANGE_PASSWORD: 'U_CHANGE_PASSWORD',
  CREATE_USER: 'U_CREATE_USER',
  FORGOT_PASSWORD: 'U_FORGOT_PASSWORD',
  GET_USER_DATA: 'U_GET_USER_DATA',
  LOGIN: 'U_LOGIN',
  VERIFY_EMAIL: 'U_VERIFY_EMAIL',
};

/* Change Password */

const changePasswordSuccess = data => ({
  type: USER_ACTIONS.CHANGE_PASSWORD,
  payload: data,
});

export const changePassword = data => dispatch => (
  axios.put(changePasswordAPI(), {
    token: data.token,
    password: data.password,
    username: data.username,
  })
    .then((response) => {
      dispatch(changePasswordSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    })
);

/* Create User */

const createUserSuccess = data => ({
  type: USER_ACTIONS.CREATE_USER,
  payload: data,
});

export const createUser = data => dispatch => (
  axios.post(createUserAPI(), {
    email: data.email,
    password: data.password,
    username: data.username,
  })
    .then((response) => {
      dispatch(createUserSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    })
);

/* Forgot Password */

const forgotPasswordSuccess = data => ({
  type: USER_ACTIONS.FORGOT_PASSWORD,
  payload: data,
});

export const forgotPassword = data => dispatch => (
  axios.post(forgotPasswordAPI(), {
    email: data.email,
    username: data.username,
  })
    .then((response) => {
      dispatch(forgotPasswordSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    })
);

/* Get User Data */

const getUserDataSuccess = data => ({
  type: USER_ACTIONS.GET_USER_DATA,
  payload: data,
});

export const getUserData = () => (dispatch) => {
  const token = localStorage.getItem('token');
  axios.get(getUserDataAPI(), {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch(getUserDataSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    });
};

/* Login */

const loginSuccess = data => ({
  type: USER_ACTIONS.LOGIN,
  payload: data,
});

export const login = data => dispatch => (
  axios.post(loginAPI(), {
    password: data.password,
    username: data.username,
  })
    .then((response) => {
      dispatch(loginSuccess(getResponseData(response)));
    })
    .catch((error) => {
      dispatch(addNotification(getErrorDetails(error), 'login-error'));
      throw (error);
    })
);

/* Verify Mail */

const verifyMailSuccess = data => ({
  type: USER_ACTIONS.VERIFY_EMAIL,
  payload: data,
});

export const verifyMail = data => dispatch => (
  axios.post(verifyMailAPI(), {
    secretKey: data.token,
  })
    .then((response) => {
      dispatch(verifyMailSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    })
);
