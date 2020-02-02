import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../containers/Home';
import LoginPage from '../containers/Login';
import SignUpPage from '../containers/Signup';
import ProfilePage from '../containers/Profile';
import EditProfilePage from '../containers/EditProfile';
import { isAuthenticated } from '../firebase';
import { ROUTES } from '../constant';

const methodCall= () => {
  const result = isAuthenticated();
  return result;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        methodCall() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

const routes = (
  <Switch>
    <Route path={ROUTES.HOME} exact component={HomePage} />
    <Route path={ROUTES.LOGIN} exact component={LoginPage} />
    <Route path={ROUTES.SIGNUP} exact component={SignUpPage} />
    <PrivateRoute path={ROUTES.PROFILE} exact component={ProfilePage} />
    <PrivateRoute path={ROUTES.EDIT_PROFILE} exact component={EditProfilePage} />
    <Redirect from="/*" to={ROUTES.HOME} />
  </Switch>
);

export default routes;
