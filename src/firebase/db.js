import { db } from './firebase';

export const setUserData = ({ 
  firstName,
  lastName,
  phoneNumber,
  address,
  email,
  dateOfBirth,
  password,
  profilePicUrl, 
}) => db
  .collection('users')
  .doc(`${email}`)
  .set({
    firstName,
    lastName,
    phoneNumber,
    address,
    email,
    dateOfBirth,
    password,
    profilePicUrl, 
  });

export const getUserDetail = async (email) => {
  const userRef = db.collection('users').doc(`${email}`);
  const getDoc = await userRef.get();
  const snapshot = await getDoc.data();
  return snapshot;
}

export const updateUser = async (email, data) => {
  const userRef = db.collection('users').doc(`${email}`);
  userRef.update({ ...data });
}