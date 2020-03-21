import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import movieReducers from './movieReducers';
import userReducers from './userReducers';

const rootReducer = combineReducers({
  movieReducer: movieReducers,
  userReducer: userReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
