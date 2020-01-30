import { call, put } from 'redux-saga/effects';
import { userAuthenticated, userAuthenticationFailed } from './reducer';

const authApi = () => {
  return console.log('done')
}

export function* authRequest() {
  try {
    yield call(authApi)
    yield put(userAuthenticated())
  }
  catch (error) {
    yield put(userAuthenticationFailed())
  }
}