import axios from 'axios';
import { createKulusterAPI, getKulusterListAPI, getKulusterInfoAPI } from 'common/api/Api.functions';
import { getResponseData } from 'common/api/Api.helpers';
import { addNotification } from 'common/notifications/Notifications.actions';

export const KULUSTER_ACTIONS = {
  CREATE_KULUSTER: 'K_CREATE_KULUSTER',
  GET_KULUSTER_INFO: 'K_GET_KULUSTER_INFO',
  GET_KULUSTER_INFO_ERROR: 'K_GET_KULUSTER_INFO_ERROR',
  GET_KULUSTER_LIST: 'K_GET_KULUSTER_LIST',
};

/* Create Kuluster */

const createKulusterSuccess = data => ({
  type: KULUSTER_ACTIONS.CREATE_KULUSTER,
  payload: data,
});

export const createKuluster = data => (dispatch) => {
  const token = localStorage.getItem('token');
  return (
    axios.post(createKulusterAPI(), {
      description: data.content,
      isPrivate: data.kulusterType === 'private',
      name: data.title,
    }, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(addNotification(null, 'create-kuluster-success'));
        dispatch(createKulusterSuccess(getResponseData(response)));
      })
      .catch((error) => {
        dispatch(addNotification(null, 'create-kuluster-error'));
        throw (error);
      })
  );
};

/* Get Kuluster Info */

const getKulusterInfoSuccess = data => ({
  type: KULUSTER_ACTIONS.GET_KULUSTER_INFO,
  payload: data,
});

const getKulusterInfoError = data => ({
  type: KULUSTER_ACTIONS.GET_KULUSTER_INFO_ERROR,
  payload: data,
});

export const getKulusterInfo = data => (dispatch) => {
  const token = localStorage.getItem('token');
  return axios.get(getKulusterInfoAPI(data.kulusterName), {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(getKulusterInfoSuccess(getResponseData(response)));
    })
    .catch((error) => {
      dispatch(getKulusterInfoError());
      throw (error);
    });
};

/* Get Kuluster List */

const getKulusterListSuccess = data => ({
  type: KULUSTER_ACTIONS.GET_KULUSTER_LIST,
  payload: data,
});

export const getKulusterList = () => (dispatch) => {
  const token = localStorage.getItem('token');
  return axios.get(getKulusterListAPI(), {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(getKulusterListSuccess(getResponseData(response)));
    })
    .catch((error) => {
      throw (error);
    });
};
