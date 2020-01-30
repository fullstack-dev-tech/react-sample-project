import { call, put } from 'redux-saga/effects';

const userDataApi = () => {
  return console.log('done')
}

export function* userDataRequest() {
  try {
    console.log('here')
    yield call(userDataApi)
    yield put()
  }
  catch (error) {
    yield put()
  }
}