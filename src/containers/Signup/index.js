import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validate } from '../../validation';
import { signUpUserAction } from './action'
import { connect } from 'react-redux';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = props => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    let result = validate({ 'number': phoneNumber, 'name': firstName, 'email': email, 'password': password })
    setError(result)
    if (Object.entries(result).length === 0) {
      props.signUpUserAction({
        firstName,
        lastName,
        phoneNumber,
        address,
        email,
        dateOfBirth,
        password
      })
      // props.history.push('/login')
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={event => setFirstName(event.target.value)}
              />
              {error.name &&
                <Typography color='error'>{error.name}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={event => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phoneNumber"
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                autoFocus
                onChange={event => setPhoneNumber(event.target.value)}
              />
              {error.number &&
                <Typography color='error'>{error.number}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={event => setDateOfBirth(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="address"
                label="Address"
                name="address"
                onChange={event => setAddress(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={event => setEmail(event.target.value)}
              />
              {error.email &&
                <Typography color='error'>{error.email}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => setPassword(event.target.value)}
              />
              {error.password &&
                <Typography color='error'>{error.password}</Typography>}
            </Grid>
          </Grid>
          <Button
            variant="contained"
            component="label"
            color='primary'
            type="input"
            fullWidth
            className={classes.submit}
          >
            Choose Photo
            <input
              type="file"
              style={{ display: "none" }}
            />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     isAuthorized: state.AuthReducer.isAuthenticated,
//     errorMessage: state.AuthReducer.error
//   }
// }

export default connect(null, { signUpUserAction })(SignUp);

