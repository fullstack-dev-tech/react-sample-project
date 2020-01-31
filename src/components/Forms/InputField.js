import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const InputField = ({ error, maxSize, ...props }) => (
  <>
    <TextField {...props} />
    {error &&
      <Typography color="error">{error}</Typography>}
  </>
);

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

InputField.defaultProps = {
  fullWidth: true,
  error: '',
};

export default InputField;
