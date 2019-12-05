import { COMMON_ACTIONS } from './common.actions';

export default (state = null, action) => {
  switch (action.type) {
    case COMMON_ACTIONS.UPDATE_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
      };
    default:
      return state;
  }
};
