import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn, signOut } from '../../firebase/auth';
import { login, loginSuccess, loginFailure, logout } from './reducer';
import { ROUTES } from '../../constant';
import history from '../../app/history';

function* loginSaga(action) {
  try {
    const user = yield call(signIn, action.payload.email, action.payload.password);
    console.log('Login Success: ', user);
    yield put({ type: loginSuccess.type, payload: { ...user } });
    history.push(ROUTES.PROFILE);
  }
  catch (error) {
    console.log('Login Error: ', error);
    yield put({ type: loginFailure.type, payload: error.message });
  }
}

function* logoutSaga(action) {
  try {
    const user = yield call(signOut);
    console.log('Logout Success: ', user);
    history.push(ROUTES.LOGIN);
  }
  catch (error) {
    console.log('Logout Error: ', error);
    yield put({ type: loginFailure.type, payload: error.message });
  }
}


export default function* main() {
  yield takeEvery(login.type, loginSaga);
  yield takeEvery(logout.type, logoutSaga);
}
