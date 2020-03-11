import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'dotenv/config.js';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'movies-76b58.firebaseapp.com',
  databaseURL: 'https://movies-76b58.firebaseio.com',
  projectId: 'movies-76b58',
  storageBucket: 'movies-76b58.appspot.com',
  appId: '1:441620217084:web:91cc6d455aeb3ffb9eab79'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
