import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'modules/app/App';
import LoginContainer from 'modules/login/Login.container';
import RegisterContainer from 'modules/register/Register.container';
import NotFound from 'modules/notfound/NotFound.component';
import RouteControllerContainer from './controller/RouteController.container';
import EnsureLoggedInContainer from './ensureLoggedIn/EnsureLoggedIn.container';

const Routes = () => (
  <RouteControllerContainer>
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/register" component={RegisterContainer} />
      <Route component={App} />
    </Switch>
  </RouteControllerContainer>
);

export default Routes;
