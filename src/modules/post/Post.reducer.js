import { POST_ACTIONS } from 'modules/post/Post.actions';

export default (state = null, action) => {
  switch (action.type) {
    case POST_ACTIONS.GET_POST_INFO:
      return {
        ...state,
        postDetails: action.payload,
      };
    case POST_ACTIONS.GET_POST_INFO_ERROR:
      return {
        ...state,
        postDetails: null,
      };
    default:
      return state;
  }
};
