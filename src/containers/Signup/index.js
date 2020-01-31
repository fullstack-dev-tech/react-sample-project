import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import ProfileForm from '../../components/ProfileForm';
import { signup } from './reducer';

const SignUp = props => {
  const handleSubmit = (values) => {
    props.signUpUserAction(values);
  };

  return (
    <Container component="main" maxWidth="sm">
      <ProfileForm
        title="Sign Up"
        handleSubmit={handleSubmit}
        submitActionText="Sign Up"
      />
    </Container>
  );
};

export default connect(
  null,
  {
    signUpUserAction: signup,
  },
)(SignUp);
