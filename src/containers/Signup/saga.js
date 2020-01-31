import { call, takeEvery } from 'redux-saga/effects';
import { signUpUser } from '../../firebase/auth';
import { signUpUserAction } from './action'

function* signUpUserSaga(action) {
  try {
    yield call(signUpUser, action.payload)
  }
  catch (error) {
    // yield put()
  }
}

export default function* main() {
  yield takeEvery(signUpUserAction, signUpUserSaga);
}
