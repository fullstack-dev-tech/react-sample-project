import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2, 6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.grey[500],
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
    </Box>
  );
}

export default Footer;
