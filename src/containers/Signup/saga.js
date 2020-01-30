import { call, put } from 'redux-saga/effects';
import {signUpUser} from '../../firebase/auth';

export function* signUpUserSaga() {
  try {
    yield call(signUpUser)
  }
  catch (error) {
    // yield put()
  }
}