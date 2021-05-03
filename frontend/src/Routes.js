import React from 'react';

import { Router, Switch, Route } from 'react-router';

import Login from './components/Login/login';
import Home from './components/Home/home';
import Register from './components/Register/register';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Home} exact path="/" />
    </Switch>
  </Router>
);

export default Routes;
