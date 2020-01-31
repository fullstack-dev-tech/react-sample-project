import { combineReducers } from 'redux';
import login from '../containers/Login/reducer';
import user from '../containers/Profile/reducer';
import signup from '../containers/Signup/reducer';

const authentication = combineReducers({ login, signup });

export default combineReducers({ authentication, user });
