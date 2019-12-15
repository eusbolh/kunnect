import { FEED_ACTIONS } from './Feed.actions';

export default (state = null, action) => {
  switch (action.type) {
    case FEED_ACTIONS.GET_FEED:
      return {
        ...state,
        feed: action.payload && action.payload.posts,
      };
    default:
      return state;
  }
};
