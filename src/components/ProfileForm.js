import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputField from './Forms/InputField';
import UploadFile from './Forms/UploadFile'

const useStyles = makeStyles(theme => ({
  card: {
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const ProfileForm = ({
  title,
  handleSubmit,
  values,
  submitActionText,
  securityQuestions,
  showPasswordField = true,
  validateFormInputs,
  disableEmail = false,
  loading,
}) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState(values.firstName);
  const [lastName, setLastName] = useState(values.lastName);
  const [phoneNumber, setPhoneNumber] = useState(values.phoneNumber);
  const [address, setAddress] = useState(values.address);
  const [email, setEmail] = useState(values.email);
  const [dateOfBirth, setDateOfBirth] = useState(values.dateOfBirth);

  const [password, setPassword] = useState(values.password);
  const [confirmPassword, setConfirmPassword] = useState(values.confirmPassword);
  
  const [answerOne, setAnswerOne] = useState(values.answerOne);
  const [answerTwo, setAnswerTwo] = useState(values.answerTwo);
  const [answerThree, setAnswerThree] = useState(values.answerThree);
  
  const [error, setError] = useState({});
  const [profilePic, setProfilePic] = useState(values.profilePic);

  const onImageUpload = (event) => {
    setProfilePic(event.target.files[0])
  };

  const onSubmit = () => {
    const errors = validateFormInputs({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      dateOfBirth,
      address,
      profilePic,
      answerOne,
      answerTwo,
      answerThree,
    });

    if (Object.entries(errors).length === 0) {
      handleSubmit({
        firstName,
        lastName,
        phoneNumber,
        address,
        email,
        dateOfBirth,
        password,
        profilePic,
        answerOne,
        answerTwo,
        answerThree,
      });
    } else {
      setPassword('');
      setConfirmPassword('');
    }
    setError(errors);
  }

  return (
    <Card className={classes.card}>
      <Typography variant="h4">{title}</Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              required
              label="First Name"
              autoFocus
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              error={error.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              required
              label="Last Name"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              error={error.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              required
              label="Phone Number"
              value={phoneNumber}
              onChange={event => setPhoneNumber(event.target.value)}
              error={error.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              required
              label="Date of Birth"
              type="date"
              className={classes.textField}
              error={error.dateOfBirth}
              value={dateOfBirth}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event => setDateOfBirth(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              required
              label="Email Address"
              value={email}
              onChange={event => setEmail(event.target.value)}
              error={error.email}
              disabled={disableEmail}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              required
              label="Address"
              value={address}
              onChange={event => setAddress(event.target.value)}
              error={error.address}
            />
          </Grid>
          {
            showPasswordField && 
            <React.Fragment>
              <Grid item xs={12} sm={6}>
                <InputField
                  required
                  label="Password"
                  type="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  error={error.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  required
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                  error={error.confirmPassword}
                />
              </Grid>
            </React.Fragment>
          }
          {
            securityQuestions && securityQuestions.length > 0 && 
            (
              <React.Fragment>
                <Grid item xs={12}>
                  <InputField
                    required
                    label={securityQuestions[0].description}
                    value={answerOne}
                    onChange={event => setAnswerOne(event.target.value)}
                    error={error.answerOne}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    required
                    label={securityQuestions[1].description}
                    value={answerTwo}
                    onChange={event => setAnswerTwo(event.target.value)}
                    error={error.answerTwo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    required
                    label={securityQuestions[2].description}
                    value={answerThree}
                    onChange={event => setAnswerThree(event.target.value)}
                    error={error.answerThree}
                  />
                </Grid>
              </React.Fragment>
            )
          }
        </Grid>
        <UploadFile 
          onChange={event => onImageUpload(event)} 
          imageName={profilePic && profilePic.name}
          error={error.profilePic}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
          disabled={loading}
        >
          {submitActionText}
        </Button>
      </form>
    </Card>
  );
};

ProfileForm.defaultProps = {
  values: {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
    profilePic: null,
    password: '',
    answerOne: '',
    answerTwo: '',
    answerThree: '',
  },
};

export default ProfileForm;
