import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'modules/app/App';
import LoginContainer from 'modules/login/Login.container';
import RouteControllerContainer from './controller/RouteController.container';
import EnsureLoggedInContainer from './ensureLoggedIn/EnsureLoggedIn.container';

const Routes = () => (
  <RouteControllerContainer>
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <EnsureLoggedInContainer>
        <Route exact path="/" component={App} />
      </EnsureLoggedInContainer>
    </Switch>
  </RouteControllerContainer>
);

export default Routes;
