import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserData } from '../../constant'

const HomePage = props => {
  return (
    <div>
    
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
