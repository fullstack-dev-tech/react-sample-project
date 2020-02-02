import { INVALI_EMAIL, INVALID_PASSWORD, INVALID_NUMBER, INVALID_NAME } from '../constant';

export const validateSignUp = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword',
    'phoneNumber',
    'dateOfBirth',
    'address',
    'profilePic',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Please Enter ${field}`;
    }
  });

  if (values.email && !values.email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
    errors.email = INVALI_EMAIL;
  }
  if (values.password && !values.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    errors.password = INVALID_PASSWORD;
  }
  if (values.phoneNumber && !values.phoneNumber.match(/\d{10}/)) {
    errors.phoneNumber = INVALID_NUMBER;
  }
  if (values.firstName && !values.firstName.match(/[a-zA-Z_]/)) {
    errors.firstName = INVALID_NAME;
  }
  if (values.lastName && !values.lastName.match(/[a-zA-Z_]/)) {
    errors.lastName = INVALID_NAME;
  }

  return errors;
};

export const validateEditProfile = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'dateOfBirth',
    'address',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Please Enter ${field}`;
    }
  });

  if (values.email && !values.email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
    errors.email = INVALI_EMAIL;
  }
  if (values.phoneNumber && !values.phoneNumber.match(/\d{10}/)) {
    errors.phoneNumber = INVALID_NUMBER;
  }
  if (values.firstName && !values.firstName.match(/[a-zA-Z_]/)) {
    errors.firstName = INVALID_NAME;
  }
  if (values.lastName && !values.lastName.match(/[a-zA-Z_]/)) {
    errors.lastName = INVALID_NAME;
  }
  return errors;
};

export const validateLogin = values => {
  const errors = {};
  const requiredFields = ['email', 'password'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });

  if (values['email'] && !values['email'].match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
    errors['email'] = INVALI_EMAIL;
  }
  if (values['password'] && !values['password'].match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
    errors['password'] = INVALID_PASSWORD;
  }
  return errors;
};
