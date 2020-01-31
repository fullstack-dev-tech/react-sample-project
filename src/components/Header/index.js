import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { ROUTES } from '../../constant';
import Link from '../../components/Link';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = props => {
  const classes = useStyles();
  const isOnLoginPage = props.location.pathname === ROUTES.LOGIN;
  const isOnSignupPage = props.location.pathname === ROUTES.SIGNUP;

  return (
    <Container>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Heros
          </Typography>

          {props.isAuthorized && (
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="/profile"
                className={classes.link}
                onClick={()=>props.getUserData()}>
                Profile
            </Link>
            </nav>
          )}
          {!props.isAuthorized && !isOnLoginPage && (
            <nav>
              <Link color="textPrimary" to={ROUTES.LOGIN} className={classes.link}>
                Login
              </Link>
            </nav>
          )}
          {!props.isAuthorized && !isOnSignupPage && (
            <Button href="/signup" variant="outlined" className={classes.link}>
              <Link color="textPrimary" to={ROUTES.SIGNUP}>
                Create Account
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default withRouter(Header);
