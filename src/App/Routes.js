import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../containers/Home';
import LoginPage from '../containers/Login';
import SignUpPage from '../containers/Signup'

const createRoutes = () => <Router>
  <Route path="/" exact component={HomePage} />
  <Route path="/login" exact component={LoginPage} />
  <Route path="/signup" component={SignUpPage} />
</Router>

export default createRoutes;
