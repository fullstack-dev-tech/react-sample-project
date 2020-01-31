import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { validate } from './validation';
import InputField from '../../components/Forms/InputField';
import Link from '../../components/Link';
import { login } from './reducer';
import { getMe } from '../Profile/reducer';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(4, 3),
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
    if (!Object.keys(result).length) {
      props.authorizeUser({email,password})
    }
  }

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <Typography variant="h4">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handelSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField
                required
                fullWidth
                label="Email Address"
                onChange={(event => setEmail(event.target.value))}
              />
              {error.email &&
                <Typography color='error'>{error.email}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <InputField
                required
                fullWidth
                label="Password"
                type="password"
                onChange={(event => setPassword(event.target.value))}
              />
              {error.password &&
                <Typography color='error'>{error.password}</Typography>}
            </Grid>
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
                <Link to="/login">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}

const matchDispatchToProps = {
  authorizeUser: login,
  userData: getMe,
};

// const mapStateToProps = (state) => {
//   return {
//     isAuthorized: state.AuthReducer.isAuthenticated,
//     errorMessage: state.AuthReducer.error
//   }
// }

export default connect(null, matchDispatchToProps)(SignIn);
