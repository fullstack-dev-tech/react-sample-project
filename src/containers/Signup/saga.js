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

function* signUpUserSaga(action) {
  try {
    console.log('Signup Started');
    yield call(firebaseActions.signUpUser, action.payload);
    console.log('Signup Success: ');
    yield put({ type: signupSuccess.type });
    history.push(ROUTES.LOGIN);
  }
  catch (error) {
    console.log('Error in Signup: ', error);
    yield put({ type: signupFailure.type, payload: error.message });
  }
}

function* getSecurityQuestionsSaga(action) {
  try {
    console.log('Firing Security Questions-----:  ');
    const data = yield call(firebaseActions.getSecurityQuestions, action.payload);
    console.log('Got Security Questions: ');
    yield put({ type: getSecurityQuestionsSuccess.type, payload: data });
  }
  catch (error) {
    console.log('Error in Security Questions: ', error);
    yield put({ type: getSecurityQuestionsFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(signup.type, signUpUserSaga);
  yield takeEvery(getSecurityQuestions.type, getSecurityQuestionsSaga);
}
