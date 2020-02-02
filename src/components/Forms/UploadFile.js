import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  uploadButton: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const UploadFile = ({ onChange, imageName }) => {
  const classes = useStyles();
  return (
    <Button
      fullWidth
      component="label"
      variant="contained"
      color="primary"
      type="input"
      className={classes.uploadButton}
    >
      {imageName || 'Upload Profile Image'}
      <input
        type="file"
        onChange={onChange}
        accept="image/*"
        style={{ display: "none" }}
      />
    </Button>
  );
}

UploadFile.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default UploadFile;
