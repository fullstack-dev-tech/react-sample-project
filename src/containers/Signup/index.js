import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileForm from '../../components/ProfileForm';
import { signup, getSecurityQuestions } from './reducer';
import { validateSignUp } from '../../validation';

const SignUp = props => {

  useEffect(() => {
    props.getSecurityQuestions();
  }, []);

  useEffect(() => {
    if (props.isAuthenticated) {
      props.history.push('/profile');
    }
  }, [props.history, props.isAuthenticated])

  const handleSubmit = (values) => {
    // console.log(values);
    props.signup(values);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box mt={[2, 4]}>
        <ProfileForm
          title="Sign Up"
          handleSubmit={handleSubmit}
          submitActionText="Sign Up"
          securityQuestions={props.securityQuestions}
          validateFormInputs={validateSignUp}
        />
      </Box>
    </Container>
  );
};

SignUp.propTypes = {
  getSecurityQuestions: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  securityQuestions: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    securityQuestions: state.authentication.signup.securityQuestions,
    isAuthenticated: state.user.isAuthenticated,
  };
};

const mapDispatchToProps = {
  getSecurityQuestions,
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
