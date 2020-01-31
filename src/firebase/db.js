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

export const getSecurityQuestions = async () => {
  let questions = []
  const questionsRef = db.collection('securityQuestions');
  const snapshots = await questionsRef.get();
  if (snapshots.empty) {
    throw new Error("No security questions found")
  }
  snapshots.forEach(doc => {
    questions[doc.id] = doc.data().description;
  });
  return questions
} 