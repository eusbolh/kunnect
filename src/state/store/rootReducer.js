import { combineReducers } from 'redux';
import authReducer from 'common/auth/auth.reducer';
import UserReducer from 'common/user/User.reducer';
import NotificationsReducer from 'common/notifications/Notifications.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: NotificationsReducer,
  user: UserReducer,
});

export default rootReducer;
