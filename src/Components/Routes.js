import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../Auth/PrivateRoute';

//Components
import Login from './User/Login';
import Signup from './User/Signup';

import Placeholder from './User/UserPlaceholder';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      {/* Should be after user logs in */}
      <PrivateRoute path="/user/:id" component={Placeholder} />

      {/* Search component example */}
      <PrivateRoute path="/user/:id/search" />
    </Switch>
  );
};

export default Routes;
