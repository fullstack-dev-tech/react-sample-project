import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <Container>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Heros
          </Typography>

          {props.isAuthorized ? (
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
          ) : (
              <nav>
                <Link variant="button" color="textPrimary" href="/login" className={classes.link}>
                  Login
            </Link>
              </nav>
            )}
          {!props.isAuthorized &&
            <Button href="/signup" color="primary" variant="outlined" className={classes.link}>
              Create Account
          </Button>
          }
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header;
