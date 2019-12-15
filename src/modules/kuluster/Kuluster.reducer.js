import { KULUSTER_ACTIONS } from 'modules/kuluster/Kuluster.actions';

export default (state = null, action) => {
  switch (action.type) {
    case KULUSTER_ACTIONS.GET_KULUSTER_INFO:
      return {
        ...state,
        kulusterInfo: action.payload,
      };
    case KULUSTER_ACTIONS.GET_KULUSTER_INFO_ERROR:
      return {
        ...state,
        kulusterInfo: null,
      };
    case KULUSTER_ACTIONS.GET_KULUSTER_LIST:
      return {
        ...state,
        kulusterList: action.payload && action.payload.kulusterNames,
      };
    default:
      return state;
  }
};
