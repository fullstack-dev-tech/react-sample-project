import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import signUpSaga from '../containers/Signup/saga';


// import { authRequest } from '../containers/Login/saga'
// import { takeLatest } from 'redux-saga/effects'
// import { authRequestAction } from '../constant';
// import { getUserData } from '../constant';
// import { userDataRequest } from '../containers/Profile/saga'
// import { signUpUserSaga } from '../containers/Signup/saga'
// import { signUpUserAction } from '../containers/Signup/action'

function* rootSaga() {
  yield all(
    [ 
      fork(signUpSaga), 
      // fork(saga2), 
      // fork(saga3), 
    ]
  );
  // yield takeLatest(authRequestAction, authRequest)
  // yield takeLatest(getUserData, userDataRequest)
  // yield takeLatest(signUpUserAction, signUpUserSaga)
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
}

export default sagaMiddleware;
