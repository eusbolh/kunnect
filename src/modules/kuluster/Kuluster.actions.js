import axios from 'axios';
import { createKulusterAPI } from 'common/api/Api.functions';
import { getResponseData } from 'common/api/Api.helpers';

export const KULUSTER_ACTIONS = {
  CREATE_KULUSTER: 'K_CREATE_KULUSTER',
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
        dispatch(createKulusterSuccess(getResponseData(response)));
      })
      .catch((error) => {
        throw (error);
      })
  );
};
