import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: `calc(100vh - ${theme.spacing(10 + 8)}px)`,
  },
}));

export const PageWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      {children}
    </Box>
  );
}

export default PageWrapper;
