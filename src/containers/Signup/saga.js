import { call, put, takeEvery } from 'redux-saga/effects';
import * as firebaseActions from '../../firebase';
import { 
  signup, 
  signupSuccess, 
  signupFailure,  
  getSecurityQuestions, 
  getSecurityQuestionsSuccess, 
  getSecurityQuestionsFailure
} from './reducer';
import { ROUTES } from '../../constant';
import history from '../../app/history';
import { setOpen } from '../Notifications/reducer';

function* signUpUserSaga(action) {
  try {
    yield call(firebaseActions.signUpUser, action.payload);
    yield put({ type: signupSuccess.type });
    yield put({ type: setOpen.type, payload: { isSuccess: true, message: 'SignUp Success!!!!' } })
    history.push(ROUTES.PROFILE);
  }
  catch (error) {
    console.log('Error in Signup: ', error);
    yield put({ type: setOpen.type, payload: { isSuccess: false, message: error.message } })
    yield put({ type: signupFailure.type, payload: error.message });
  }
}

function* getSecurityQuestionsSaga(action) {
  try {
    const data = yield call(firebaseActions.getSecurityQuestions, action.payload);
    yield put({ type: getSecurityQuestionsSuccess.type, payload: data });
  }
  catch (error) {
    console.log('Error in Security Questions: ', error);
    yield put({ type: setOpen.type, payload: { isSuccess: false, message: error.message } })
    yield put({ type: getSecurityQuestionsFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(signup.type, signUpUserSaga);
  yield takeEvery(getSecurityQuestions.type, getSecurityQuestionsSaga);
}
