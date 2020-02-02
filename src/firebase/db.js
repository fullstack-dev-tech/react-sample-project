import { db, auth } from './firebase';

export const setUserData = ({ 
  firstName,
  lastName,
  phoneNumber,
  address,
  email,
  dateOfBirth,
  profilePicUrl, 
  answerOne,
  answerTwo,
  answerThree,
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
    profilePicUrl,
    answerOne,
    answerTwo,
    answerThree,
  });

export const getUserDetail = async () => {
  const email = auth.currentUser.email;
  const userRef = db.collection('users').doc(`${email}`);
  const getDoc = await userRef.get();
  const snapshot = await getDoc.data();
  return snapshot;
}

export const updateUserInDB = async (data) => {
  const email = auth.currentUser.email;
  const userRef = db.collection('users').doc(`${email}`);
  try {
    await userRef.update({ ...data });
  } catch (error) {
    throw error;
  }
}

export const getSecurityQuestions = async () => {
  let questions = []
  const questionsRef = db.collection('securityQuestions');
  const snapshots = await questionsRef.get();
  if (snapshots.empty) {
    throw new Error("No security questions found")
  }
  snapshots.forEach(doc => {
    questions.push({
      id: doc.id,
      description: doc.data().description,
    })
  });
  return questions
} 