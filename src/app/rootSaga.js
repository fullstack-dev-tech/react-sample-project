import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import startUpSaga from '../containers/startup/saga';
import signUpSaga from '../containers/Signup/saga';
import userSaga from '../containers/Profile/saga';
import editProfileSaga from '../containers/EditProfile/saga';
import loginSaga from '../containers/Login/saga';

function* rootSaga() {
  yield all(
    [ 
      fork(startUpSaga), 
      fork(signUpSaga), 
      fork(userSaga), 
      fork(loginSaga), 
      fork(editProfileSaga), 
    ]
  );
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
}

export default sagaMiddleware;
