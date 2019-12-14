import httpService from 'axios';
import { createPostAPI } from 'common/api/Api.functions';
import { addNotification } from 'common/notifications/Notifications.actions';
import { getResponseData } from 'common/api/Api.helpers';

export const POST_ACTIONS = {
  CREATE_POST: 'P_CREATE_POST',
};

const axios = httpService.create({
  withCredentials: true,
});

/* Create Post */

const createPostSuccess = data => ({
  type: POST_ACTIONS.CREATE_POST,
  payload: data,
});

export const createPost = data => (dispatch) => {
  const token = localStorage.getItem('token');
  return (
    axios.post(createPostAPI(), {
      content: data.content,
      kulusterName: data.kulusterName,
      title: data.title,
    }, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(addNotification(null, 'create-post-success'));
        dispatch(createPostSuccess(getResponseData(response)));
      })
      .catch((error) => {
        dispatch(addNotification(null, 'create-post-error'));
        throw (error);
      })
  );
};
