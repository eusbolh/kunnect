import { combineReducers } from 'redux';
import UserReducer from 'common/user/User.reducer';
import NotificationsReducer from 'common/notifications/Notifications.reducer';

const rootReducer = combineReducers({
  notifications: NotificationsReducer,
  user: UserReducer,
});

export default rootReducer;
