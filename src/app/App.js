import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from '../routes';
import { startSaga } from './rootSaga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import { logout } from '../containers/Login/reducer';
import history from './history';

const App = (props) => {
  useEffect(() => {
    startSaga();  
  }, []);

  return (
    <Router history={history}>
      <Box>
        <CssBaseline />
        <Header {...props}/>
        <PageWrapper>
          {routes}
        </PageWrapper>
        <Footer />
      </Box>
    </Router>
  )
}

const matchDispatchToProps = {
  logout,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);