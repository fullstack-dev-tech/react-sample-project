import { call, put, takeEvery } from 'redux-saga/effects';
import { signUpUser } from '../../firebase/auth';
import { signup, signupSuccess, signupFailure } from './reducer';

function* signUpUserSaga(action) {
  try {
    yield call(signUpUser, action.payload);
    console.log('Signup Success: ');
    yield put({ type: signupSuccess.type });
  }
  catch (error) {
    console.log('Error in Signup: ', error);
    yield put({ type: signupFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(signup.type, signUpUserSaga);
}
