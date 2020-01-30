import { db } from './firebase';

// Users
export const doCreateUser = (
  firstName,
  lastName,
  phoneNumber,
  address,
  email,
  dateOfBirth,
) =>
  db.collection('users').doc(`${email}`).set({
    firstName,
    lastName,
    phoneNumber,
    address,
    email,
    dateOfBirth,
  });

export const getUserDetail = async (email) => {
  const userRef = db.collection('users').doc(`${email}`);
  const getDoc = await userRef.get();
  const snapshot = await getDoc.data();
  return snapshot;
}

export const updateUser = async (email, data) => {
  const userRef = db.collection('users').doc(`${email}`);
  // Set the field of the user provided
  userRef.update({ ...data });
}