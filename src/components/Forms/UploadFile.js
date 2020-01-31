import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const UploadForm = ({ onChange }) => (
  <Box>
    <Input
      accept="image/*"
      style={{ display: 'none' }}
      id="raised-button-file"
      type="file"
      onChange={onChange}
    />
    <label>
      <Button component="span">
        Upload
      </Button>
    </label>
  </Box>
);

UploadForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default UploadForm;
