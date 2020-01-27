import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from '../containers/Home'

const createRoutes = () => <Router>
    <Route path="/home" exact component={HomePage} />
    <Redirect from="/*" to="/home" />
</Router>

export default createRoutes;
