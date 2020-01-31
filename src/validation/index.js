import { INVALI_EMAIL, INVALID_PASSWORD, INVALID_NUMBER, INVALID_NAME } from '../constant';

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword',
    'phoneNumber',
    'dateOfBirth',
    'address'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });

  if (values.email && !values.email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
    errors.email = INVALI_EMAIL;
  }
  if (values.password && !values.password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&'*+-/=?^_`{|}~]).{8,}/)) {
    errors.password = INVALID_PASSWORD;
  }
  if (values.phoneNumber && !values.phoneNumber.match(/\d{10}/)) {
    errors.phoneNumber = INVALID_NUMBER;
  }
  if (values.name && !values.name.match(/[a-zA-Z_]/)) {
    errors.name = INVALID_NAME;
  }

  return errors;
};
