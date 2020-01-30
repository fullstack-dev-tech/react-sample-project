import { INVALI_EMAIL, INVALID_PASSWORD, INVALID_NUMBER, INVALID_NAME } from '../constant';

export const validate = values => {
  const errors = {};
  const requiredFields = ['email', 'password', 'number', 'name'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });

  if (values['email'] && !values['email'].match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)) {
    errors['email'] = INVALI_EMAIL;
  }
  if (values['password'] && !values['password'].match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&'*+-/=?^_`{|}~]).{8,}/)) {
    errors['password'] = INVALID_PASSWORD;
  }
  if (values['number'] && !values['number'].match(/\d{10}/)) {
    errors['number'] = INVALID_NUMBER;
  }
  if (values['name'] && !values['name'].match(/[a-zA-Z_]/)) {
    errors['name'] = INVALID_NAME;
  }

  return errors;
};