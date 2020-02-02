import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import ProfileForm from '../../components/ProfileForm';
import { getMe } from '../Profile/reducer';
import { validateEditProfile } from '../../validation';
import { editProfile } from './reducer';

const EditProfile = props => {
  useEffect(() => {
    props.getMe();
  }, []);

  const handleSubmit = ({ firstName, lastName, phoneNumber, address, dateOfBirth, profilePic }) => {
    props.editProfile({ firstName, lastName, phoneNumber, address, dateOfBirth, profilePic });
  };

  return (
    <Container component="main" maxWidth="md">
      <Box mt={[2, 4]}>
        <ProfileForm
          title="Edit Profile"
          handleSubmit={handleSubmit}
          submitActionText="Edit Profile"
          values={props.user}
          showPasswordField={false}
          disableEmail={true}
          validateFormInputs={validateEditProfile}
          loading={props.loading}
        />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loading: state.edit.loading,
  };
};

const mapDispatchToProps = {
  getMe,
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
