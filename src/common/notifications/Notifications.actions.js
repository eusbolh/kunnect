export const NOTIFICATIONS_ACTIONS = {
  ADD_NOTIFICATION: 'N_ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'N_REMOVE_NOTIFICATION',
};

export const addNotification = (data, notificationType) => ({
  type: NOTIFICATIONS_ACTIONS.ADD_NOTIFICATION,
  payload: data,
  notificationType,
});

export const removeNotification = () => ({
  type: NOTIFICATIONS_ACTIONS.REMOVE_NOTIFICATION,
});
