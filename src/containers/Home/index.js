import React from 'react';
import { connect } from 'react-redux';

const HomePage = props => {
  return (
    <div>
    
    </div>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     user: state.ProfileReducer.userData,
//     isAuthorized: state.AuthReducer.isAuthenticated
//   }
// }
// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     getUserData: getUserData
//   }, dispatch);
// }

export default connect(null, null)(HomePage);
