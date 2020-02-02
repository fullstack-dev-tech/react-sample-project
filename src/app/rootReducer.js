import { combineReducers } from 'redux';
import login from '../containers/Login/reducer';
import user from '../containers/Profile/reducer';
import edit from '../containers/EditProfile/reducer';
import signup from '../containers/Signup/reducer';
import notification from '../containers/Notifications/reducer';

const authentication = combineReducers({ login, signup });

export default combineReducers({ authentication, user, edit, notification });
