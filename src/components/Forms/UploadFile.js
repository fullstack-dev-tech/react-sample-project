import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const UploadFile = ({ onChange }) => (
  <Button
    fullWidth
    variant="contained"
    color="primary"
  >
    Upload Profile Image
    <input
      type="file"
      onChange={onChange}
      style={{ display: "none" }}
    />
  </Button>
);

UploadFile.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default UploadFile;
