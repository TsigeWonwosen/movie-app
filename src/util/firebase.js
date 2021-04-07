import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
// import "firebase/auth";
const config = {
  apiKey: 'AIzaSyAXBcq4rq0b9BJQv0ttz0Q7cExF9p8hRHo',
  authDomain: 'netflix-clone-8a59d.firebaseapp.com',
  databaseURL: 'https://netflix-clone-8a59d.firebaseio.com',
  projectId: 'netflix-clone-8a59d',
  storageBucket: 'netflix-clone-8a59d.appspot.com',
  messagingSenderId: '9726502010',
  appId: '1:9726502010:web:9e2a88a031b497306247c3',
  measurementId: 'G-JSLX5W84YP',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();

// app.database.enableLogging(false);
// export const db = app.database();
// export const projectStorage = app.storage();
// export const projectFileStore = app.firestore();
// export const auth = app.auth();
// export const timestamp = app.firestore.FieldValue.serverTimestamp;
export default app;
