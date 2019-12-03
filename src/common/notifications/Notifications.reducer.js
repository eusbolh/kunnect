import { NOTIFICATIONS_ACTIONS } from './Notifications.actions';

export default (state = { notifications: [] }, action) => {
  switch (action.type) {
    case NOTIFICATIONS_ACTIONS.ADD_NOTIFICATION: {
      const notifications = [...state.notifications];
      notifications.push({ data: action.payload, type: action.notificationType });
      return { ...state, notifications };
    }
    case NOTIFICATIONS_ACTIONS.REMOVE_NOTIFICATION: {
      const notifications = [...state.notifications];
      notifications.shift();
      return { ...state, notifications };
    }
    default:
      return state;
  }
}