import { combineReducers } from 'redux';
import UserReducer from 'common/user/User.reducer';
import NotificationsReducer from 'common/notifications/Notifications.reducer';
import CommonReducer from 'common/redux/common.reducer';

const rootReducer = combineReducers({
  common: CommonReducer,
  notifications: NotificationsReducer,
  user: UserReducer,
});

export default rootReducer;
