import { KULUSTER_ACTIONS } from 'modules/kuluster/Kuluster.actions';

export default (state = null, action) => {
  switch (action.type) {
    case KULUSTER_ACTIONS.GET_KULUSTER_LIST:
      return {
        ...state,
        kulusterList: action.payload && action.payload.kulusterNames,
      };
    default:
      return state;
  }
};
