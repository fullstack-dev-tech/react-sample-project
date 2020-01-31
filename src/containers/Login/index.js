import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
// import { getMe } from '../Profile/reducer';
import { validate } from './validation';
// import { login } from './reducer';

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
    let result = validate({ 'email': email, 'password': password });
    setError(result);
    if (true) {
      props.authorizeUser({email,password})
    }
  }

  return (
    <Container component="main" maxWidth="xs">
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

// const matchDispatchToProps = {
//   authorizeUser: login,
//   userData: getMe,
// };

// const mapStateToProps = (state) => {
//   return {
//     isAuthorized: state.AuthReducer.isAuthenticated,
//     errorMessage: state.AuthReducer.error
//   }
// }

export default connect(null, null)(SignIn);
