import axios from 'axios';
import { createKulusterAPI, getKulusterListAPI } from 'common/api/Api.functions';
import { getResponseData } from 'common/api/Api.helpers';
import { addNotification } from 'common/notifications/Notifications.actions';

export const KULUSTER_ACTIONS = {
  CREATE_KULUSTER: 'K_CREATE_KULUSTER',
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

/* Get Kuluster List */

const getKulusterListSuccess = data => ({
  type: KULUSTER_ACTIONS.GET_KULUSTER_LIST,
  payload: data,
});

export const getKulusterList = () => (dispatch) => {
  const token = localStorage.getItem('token');
  axios.get(getKulusterListAPI(), {
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
