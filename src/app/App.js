import React from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from '../routes';
import { startSaga } from './rootSaga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import CustomizedSnackbars from '../components/Alert';
import { logout } from '../containers/Login/reducer';
import { setClose } from '../containers/Notifications/reducer';
import history from './history';

const App = (props) => {
  return (
    <Router history={history}>
      <CustomizedSnackbars { ...props.notification} setClose={props.setClose} />
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
  setClose,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
    notification: state.notification,
  }
}

const WrappedComponent = connect(mapStateToProps, matchDispatchToProps)(App);

export default () => {
  startSaga();
  return <WrappedComponent />
}