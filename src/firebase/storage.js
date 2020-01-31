import * as firebase from 'firebase/app'

import { storage } from './firebase';
const uuidv4 = require('uuid/v4');

export const uploadFile = async (file) => new Promise((resolve, reject) => {

  const storageRef = storage.ref();
  const uniqueName = uuidv4();
  const uploadTask = storageRef.child(`profile-images/${uniqueName}-${file.name}`).put(file);

  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED, 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');

      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: 
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: 
          console.log('Upload is running');
          break;
        default: console.log('Something While Uploading');
      }
    }, 
    error => reject(error), 
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        resolve(downloadURL);
      });
    }
  );
});