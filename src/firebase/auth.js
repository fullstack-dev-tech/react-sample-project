import { auth } from './firebase';
import { doCreateUser, getUserDetail } from './db'

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

export async function signUpUser(
  { firstName,
    lastName,
    phoneNumber,
    address,
    email,
    dateOfBirth,
    password }) {
  try {
    await doCreateUser(firstName, lastName, phoneNumber, address, email, dateOfBirth)
    await doCreateUserWithEmailAndPassword(email, password)

  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}

export async function signIn(email, password) {
  let user, userDetail
  try {
    user = await doSignInWithEmailAndPassword(email, password)
    userDetail = await getUserDetail(email)
  } catch (error) {
    throw new Error(error.message)
  }
}