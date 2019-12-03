import { combineReducers } from 'redux';
import authReducer from 'common/auth/auth.reducer';
import UserReducer from 'common/user/User.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: UserReducer,
});

export default rootReducer;
