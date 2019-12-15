import axios from 'axios';
import { createPostAPI, getPostInfoAPI, createCommentAPI } from 'common/api/Api.functions';
import { addNotification } from 'common/notifications/Notifications.actions';
import { getResponseData } from 'common/api/Api.helpers';

export const POST_ACTIONS = {
  CREATE_COMMENT: 'P_CREATE_COMMENT',
  CREATE_POST: 'P_CREATE_POST',
  GET_POST_INFO: 'P_GET_POST_INFO',
  GET_POST_INFO_ERROR: 'P_GET_POST_INFO_ERROR',
};

/* Create Comment */

const createCommentSuccess = data => ({
  type: POST_ACTIONS.CREATE_COMMENT,
  payload: data,
});

export const createComment = data => (dispatch) => {
  const token = localStorage.getItem('token');
  return (
    axios.post(createCommentAPI(), {
      commentId: data.commentID,
      content: data.content,
      postId: parseInt(data.postID, 10),
    }, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(addNotification(null, 'create-comment-success'));
        dispatch(createCommentSuccess(getResponseData(response)));
      })
      .catch((error) => {
        dispatch(addNotification(null, 'create-comment-error'));
        throw (error);
      })
  );
};

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

/* Get Post Info */

const getPostInfoSuccess = data => ({
  type: POST_ACTIONS.GET_POST_INFO,
  payload: data,
});

const getPostInfoError = data => ({
  type: POST_ACTIONS.GET_POST_INFO_ERROR,
  payload: data,
});

export const getPostInfo = data => (dispatch) => {
  const token = localStorage.getItem('token');
  return (
    axios.get(getPostInfoAPI(data.postID), {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(getPostInfoSuccess(getResponseData(response)));
      })
      .catch((error) => {
        dispatch(getPostInfoError());
        throw (error);
      })
  );
};
