import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  uploadButton: {
    margin: theme.spacing(2, 0, 2),
  },
  input: {
    display: 'none',
  },
}));

const UploadFile = ({ onChange, imageName, error }) => {
  const classes = useStyles();
  return (
    <>
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={onChange}
      />
      <label htmlFor="contained-button-file">
        <Button fullWidth variant="contained" color="primary" component="span" className={classes.uploadButton}>
          {imageName || 'Upload Profile Image'}
        </Button>
      </label>
      { error && <Typography color="error">{error}</Typography> }
    </>
  );
}

UploadFile.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default UploadFile;
