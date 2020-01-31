import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { COMPANY_LOGO_URL } from '../../constant';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2, 6),
    height: theme.spacing(10),
    backgroundColor: theme.palette.grey[500],
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <img src={COMPANY_LOGO_URL} alt="companyLogoUrl" />
    </Box>
  );
}

export default Footer;
