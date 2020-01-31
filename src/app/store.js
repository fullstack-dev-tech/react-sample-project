import { configureStore } from "@reduxjs/toolkit";
import reducer from './rootReducer';
import sagaMiddleware from './rootSaga';

const store = configureStore({
  reducer,
  middleware: [ sagaMiddleware ],
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store
