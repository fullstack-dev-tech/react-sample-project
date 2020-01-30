import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserData } from '../../constant'

const HomePage = props => {
  return (
    <div>
      <Header isAuthorized={props.isAuthorized} getUserData={props.getUserData}/>
      <h1>Need to add some heros</h1>
      <Footer />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.ProfileReducer.userData,
    isAuthorized: state.AuthReducer.isAuthenticated
  }
}
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserData: getUserData
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
