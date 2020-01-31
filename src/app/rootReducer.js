import AuthReducer from '../containers/Login/reducer';
import ProfileRecucer from '../containers/Profile/reducer';

const rootReducer = {
  AuthReducer: AuthReducer.reducer,
  ProfileReducer: ProfileRecucer.reducer
}

export default rootReducer;
