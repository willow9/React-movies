import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyA3xYXEigjnb9KhrWbFDlbgCHwLry-MxwE',
  authDomain: 'movies-76b58.firebaseapp.com',
  databaseURL: 'https://movies-76b58.firebaseio.com',
  projectId: 'movies-76b58',
  storageBucket: 'movies-76b58.appspot.com',
  messagingSenderId: '441620217084',
  appId: '1:441620217084:web:91cc6d455aeb3ffb9eab79'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
