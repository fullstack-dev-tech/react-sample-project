import { call, put, takeEvery, take, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { getUserDetail, authStateChanged } from '../../firebase';
import { getMe, getMeSuccess, getMeFailure, updateAuthentication } from './reducer';
import { setOpen } from '../Notifications/reducer';

function* getMeSaga(action) {
  try {
    const user = yield call(getUserDetail, action.payload);
    yield put({ type: getMeSuccess.type, payload: { ...user } });
  }
  catch (error) {
    console.log('Get Profile Error: ', error);
    yield put({ type: setOpen.type, payload: { isSuccess: false, message: error.message } })
    yield put({ type: getMeFailure.type, payload: error.message });
  }
}

function createUserAuthStateChannel() {
  return eventChannel(emit => {
    authStateChanged(user => emit(!!user));

    return function() {
      console.log('UnSubscribing Auth State Channel');
    }
  })
}

export function* watchUserAuthState() {
  const channel = yield call(createUserAuthStateChannel)
  while (true) {
    try {
      const payload = yield take(channel)
      yield put({ type: updateAuthentication.type, payload: { isAuthenticated: payload }})
    } catch(err) {
      console.error('socket error:', err)
      yield put({ type: setOpen.type, payload: { isSuccess: false, message: err.message } })
    }
  }
}

export default function* main() {
  yield fork(watchUserAuthState);
  yield takeEvery(getMe.type, getMeSaga);
}
