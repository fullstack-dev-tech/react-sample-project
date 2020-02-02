import { call, put, takeEvery } from 'redux-saga/effects';
import { updateUser } from '../../firebase';
import { 
  editProfile, 
  editProfileSuccess, 
  editProfileFailure,
} from './reducer';
import { ROUTES } from '../../constant';
import history from '../../app/history';
import { setOpen } from '../Notifications/reducer';

function* editProfileSaga(action) {
  try {
    yield call(updateUser, action.payload);
    yield put({ type: editProfileSuccess.type });
    yield put({ type: setOpen.type, payload: { isSuccess: true, message: 'User Update Success!!!!' } })
    history.push(ROUTES.PROFILE);
  }
  catch (error) {
    console.log('Error in Edit Profile: ', error);
    yield put({ type: setOpen.type, payload: { isSuccess: false, message: error.message } })
    yield put({ type: editProfileFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(editProfile.type, editProfileSaga);
}
