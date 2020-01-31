import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../containers/Home';
import LoginPage from '../containers/Login';
import SignUpPage from '../containers/Signup';
import ProfilePage from '../containers/Profile';

const routes = (
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/profile" component={ProfilePage} />
  </Router>
);

export default routes;
