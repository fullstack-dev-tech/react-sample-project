import { createUser, signIn, isAuthenticated, authStateChanged, signOut } from './auth';
import { setUserData, getUserDetail, updateUserInDB, getSecurityQuestions } from './db';
import { uploadFile } from './storage';

const signUpUser = async (user) => {
  try {
    const { email, password } = user;
    await createUser(email, password);
    const profilePicUrl = await uploadFile(user.profilePic);
    delete user.profilePic;
    await setUserData({ ...user, profilePicUrl});
  } catch (error) {
    throw new Error(error.message)
  }
}

const updateUser = async (_user) => {
  try {
    let user = { ..._user };
    if (_user.profilePic) {
      user.profilePicUrl = await uploadFile(_user.profilePic);
    }
    delete user.profilePic;
    await updateUserInDB({ ...user});
  } catch (error) {
    throw new Error(error.message)
  }
}


const signInUser = async (email, password) => {
  try {
    const data = await signIn(email, password);
    console.log('Signin Data:  ', data);
  } catch (error) {
    throw new Error(error.message)
  }
}

export {
  authStateChanged,
  isAuthenticated,
  signUpUser,
  signInUser,
  updateUser,
  getUserDetail,
  getSecurityQuestions,
  signOut,
};
