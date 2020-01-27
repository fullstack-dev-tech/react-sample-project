import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from '../containers/Home';
import LoginPage from '../containers/Login'

const createRoutes = () => <Router>
    <Route path="/home" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Redirect from="/*" to="/home" />
</Router>

export default createRoutes;
