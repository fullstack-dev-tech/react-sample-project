import { createUser, signIn, isAuthenticated } from './auth';
import { setUserData, getUserDetail, updateUser } from './db';
import { uploadFile } from './storage';

const signUpUser = async (user) => {
  try {
    const { email, password } = user;
    await createUser(email, password);
    const profilePicUrl = await uploadFile(user.file);
    await setUserData({ ...user, profilePicUrl});
  } catch (error) {
    throw new Error(error.message)
  }
}

const signInUser = async (email, password) => {
  try {
    await signIn(email, password)
  } catch (error) {
    throw new Error(error.message)
  }
}

export {
  isAuthenticated,
  signUpUser,
  signInUser,
  updateUser,
  getUserDetail,
}
