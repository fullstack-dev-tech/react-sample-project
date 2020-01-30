import AuthReducer from '../containers/Login/reducer';
import ProfileRecucer from '../containers/Profile/reducer';

export const rootReducer = {
  AuthReducer: AuthReducer.reducer,
  ProfileReducer: ProfileRecucer.reducer
}
