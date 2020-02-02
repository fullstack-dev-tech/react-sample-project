import { call, put, takeEvery } from 'redux-saga/effects';
import { updateUser } from '../../firebase';
import { 
  editProfile, 
  editProfileSuccess, 
  editProfileFailure,
} from './reducer';
import { ROUTES } from '../../constant';
import history from '../../app/history';

function* editProfileSaga(action) {
  try {
    console.log('Edit Profile Started');
    yield call(updateUser, action.payload);
    console.log('Edit Profile Success: ');
    yield put({ type: editProfileSuccess.type });
    history.push(ROUTES.PROFILE);
  }
  catch (error) {
    console.log('Error in Edit Profile: ', error);
    yield put({ type: editProfileFailure.type, payload: error.message });
  }
}

export default function* main() {
  yield takeEvery(editProfile.type, editProfileSaga);
}
