import { call, put } from 'redux-saga/effects';
import { userAuthenticated, userAuthenticationFailed } from './reducer';
import { signIn } from '../../firebase/auth'


export function* authRequest(action) {
  try {
    yield call(signIn,action.payload.email,action.payload.password)
    yield put(userAuthenticated())
  }
  catch (error) {
    yield put(userAuthenticationFailed())
  }
}