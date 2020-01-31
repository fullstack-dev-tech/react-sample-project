import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserDetail } from '../../firebase/db';
import { getMe, getMeSuccess, getMeFailure } from './reducer';

function* getMeSaga(action) {
  try {
    const user = yield call(getUserDetail, action.payload);
    console.log('Get Profile Success: ', user);
    yield put({ type: getMeSuccess.type, payload: { ...user } });
  }
  catch (error) {
    console.log('Get Profile Error: ', error);
    yield put({ type: getMeFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(getMe.type, getMeSaga);
}
