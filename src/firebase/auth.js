import * as firebase from 'firebase/app'

import { auth } from './firebase';

export const createUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signOut = () => {
  try {
    auth.signOut();
  } catch (error) {
    throw error;
  }
}

export const resetPassword = (email) => auth.sendPasswordResetEmail(email);

export const updatePassword = (password) => auth.currentUser.updatePassword(password);

export const isAuthenticated = () => !!auth.currentUser;

export const authStateChanged = (callback) => firebase.auth().onAuthStateChanged(callback);