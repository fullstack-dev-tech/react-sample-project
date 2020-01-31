import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from '../../firebase/auth';
import { login, loginSuccess, loginFailure } from './reducer';

function* getMeSaga(action) {
  try {
    const user = yield call(signIn, action.payload.email, action.payload.password);
    console.log('Login Success: ', user);
    yield put({ type: loginSuccess.type, payload: { ...user } });
  }
  catch (error) {
    console.log('Login Error: ', error);
    yield put({ type: loginFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(login.type, getMeSaga);
}
