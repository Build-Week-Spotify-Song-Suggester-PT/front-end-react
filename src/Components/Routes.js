import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../Auth/PrivateRoute';

//Components
import Login from './User/Login';
import Signup from './User/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="user/:id" /> //Should be after user logs in
      <PrivateRoute path="user/:id/search" /> //Search component example
    </Switch>
  );
};

export default Routes;
