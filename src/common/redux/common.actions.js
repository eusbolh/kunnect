export const COMMON_ACTIONS = {
  UPDATE_SELECTED_MENU: 'C_UPDATE_SELECTED_MENU',
};

export const updateSelectedMenu = data => ({
  type: COMMON_ACTIONS.UPDATE_SELECTED_MENU,
  payload: data,
});
