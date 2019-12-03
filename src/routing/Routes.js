import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotificationsContainer from 'common/notifications/Notifications.container';
import App from 'modules/app/App';
import LoginContainer from 'modules/login/Login.container';
import RegisterContainer from 'modules/register/Register.container';
import ForgotPasswordContainer from 'modules/forgotPassword/ForgotPassword.container';
import ResetPasswordContainer from 'modules/resetPassword/ResetPassword.container';
import NotFound from 'modules/notfound/NotFound.component';
import RouteControllerContainer from './controller/RouteController.container';
import EnsureLoggedInContainer from './ensureLoggedIn/EnsureLoggedIn.container';

const Routes = () => (
  <RouteControllerContainer>
    <NotificationsContainer>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/forgot-password" component={ForgotPasswordContainer} />
        <Route exact path="/reset-password" component={ResetPasswordContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <EnsureLoggedInContainer>
          <Route component={App} />
        </EnsureLoggedInContainer>
      </Switch>
    </NotificationsContainer>
  </RouteControllerContainer>
);

export default Routes;
