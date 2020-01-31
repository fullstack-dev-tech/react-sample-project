import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import signUpSaga from '../containers/Signup/saga';
import userSaga from '../containers/Profile/saga';
import loginSaga from '../containers/Login/saga';

function* rootSaga() {
  yield all(
    [ 
      fork(signUpSaga), 
      fork(userSaga), 
      fork(loginSaga), 
    ]
  );
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
}

export default sagaMiddleware;
