import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userDataRecieved } from '../Profile/reducer';
import { authRequest } from './action';
import { validate } from './validation';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = props => {

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    if (props.isAuthorized) {
      props.history.push("/");
    }
  }, [props.isAuthorized, props.history])

  const handelSubmit = async event => {
    event.preventDefault()
    let result = validate({ 'email': email, 'password': password })
    setError(result)
    if (Object.entries(result).length === 0) {
      props.authorizeUser()
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {props.errorMessage &&
        alert(props.errorMessage)}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handelSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event => setEmail(event.target.value))}
          />
          {error.email &&
            <Typography color='error'>{error.email}</Typography>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event => setPassword(event.target.value))}
          />
          {error.password &&
            <Typography color='error'>{error.password}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authorizeUser: authRequest,
    userData: userDataRecieved,
  }, dispatch);
}
const mapStateToProps = (state) => {
  return {
    isAuthorized: state.AuthReducer.isAuthenticated,
    errorMessage: state.AuthReducer.error
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);
