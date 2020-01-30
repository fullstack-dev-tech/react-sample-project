import { call } from 'redux-saga/effects';
import { signUpUser } from '../../firebase/auth';

export function* signUpUserSaga(action) {
  try {
    yield call(signUpUser, action.payload)
  }
  catch (error) {
    // yield put()
  }
}