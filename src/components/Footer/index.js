import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My footer can be found here.</Typography>
        </Container>
      </footer>
  );
}

export default Footer;
