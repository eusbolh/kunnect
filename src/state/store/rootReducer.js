import { combineReducers } from 'redux';
import UserReducer from 'common/user/User.reducer';
import NotificationsReducer from 'common/notifications/Notifications.reducer';
import CommonReducer from 'common/redux/common.reducer';
import FeedReducer from 'modules/feed/Feed.reducer';
import KulusterReducer from 'modules/kuluster/Kuluster.reducer';

const rootReducer = combineReducers({
  common: CommonReducer,
  feed: FeedReducer,
  kulusters: KulusterReducer,
  notifications: NotificationsReducer,
  user: UserReducer,
});

export default rootReducer;
