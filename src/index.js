import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import AuthReducer from './containers/Login/reducer';
import ProfileRecucer from './containers/Profile/reducer';
import rootSaga from './App/Saga'

const rootReducer = {
  AuthReducer: AuthReducer.reducer,
  ProfileReducer: ProfileRecucer.reducer
}
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
