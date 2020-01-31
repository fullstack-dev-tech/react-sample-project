import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../containers/Home';
import LoginPage from '../containers/Login';
import SignUpPage from '../containers/Signup';
import ProfilePage from '../containers/Profile';
import { isAuthenticated } from '../firebase';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <PrivateRoute path="/profile" exact component={ProfilePage} />
      <Redirect from="/*" to="/" />
    </Switch>
  </Router>
);

export default routes;
