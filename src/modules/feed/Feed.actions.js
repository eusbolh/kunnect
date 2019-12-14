import httpService from 'axios';
import { getFeedAPI } from 'common/api/Api.functions';
import { getResponseData } from 'common/api/Api.helpers';

export const FEED_ACTIONS = {
  GET_FEED: 'F_GET_FEED',
};

const axios = httpService.create({
  withCredentials: true,
});

/* Get Feed */

const getFeedSuccess = data => ({
  type: FEED_ACTIONS.GET_FEED,
  payload: data,
});

export const getFeed = () => (dispatch) => {
  const token = localStorage.getItem('token');
  return (
    axios.get(getFeedAPI(), {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(getFeedSuccess(getResponseData(response)));
      })
      .catch((error) => {
        throw (error);
      })
  );
};
