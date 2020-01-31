import { INVALI_EMAIL, INVALID_PASSWORD} from '../../constant';

export const validate = values => {
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
  if (values['password'] && !values['password'].match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&'*+-/=?^_`{|}~]).{8,}/)) {
    errors['password'] = INVALID_PASSWORD;
  }
  return {};
};