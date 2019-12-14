import httpService from 'axios';
import { createKulusterAPI } from 'common/api/Api.functions';
import { getResponseData } from 'common/api/Api.helpers';
import { addNotification } from 'common/notifications/Notifications.actions';

export const KULUSTER_ACTIONS = {
  CREATE_KULUSTER: 'K_CREATE_KULUSTER',
};

const axios = httpService.create({
  withCredentials: true,
});

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
