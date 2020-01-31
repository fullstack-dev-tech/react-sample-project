import { authRequest } from '../containers/Login/saga'
import { takeLatest } from 'redux-saga/effects'
import { authRequestAction } from '../constant';
import { getUserData } from '../constant';
import { userDataRequest } from '../containers/Profile/saga'
import { signUpUserSaga } from '../containers/Signup/saga'
import { signUpUserAction } from '../containers/Signup/action'

export default function* rootSaga() {
  yield takeLatest(authRequestAction, authRequest)
  yield takeLatest(getUserData, userDataRequest)
  yield takeLatest(signUpUserAction, signUpUserSaga)
}