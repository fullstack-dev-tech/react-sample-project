import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import ProfileForm from '../../components/ProfileForm';
import { signup } from './reducer';

const SignUp = props => {
  const handleSubmit = (values) => {
    props.signUpUserAction(values);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box mt={[2, 4]}>
        <ProfileForm
          title="Sign Up"
          handleSubmit={handleSubmit}
          submitActionText="Sign Up"
        />
      </Box>
    </Container>
  );
};

export default connect(
  null,
  {
    signUpUserAction: signup,
  },
)(SignUp);
