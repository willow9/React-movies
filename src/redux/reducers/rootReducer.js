import { combineReducers } from 'redux';
import movieReducers from './movieReducers';
import userReducers from './userReducers';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  movieReducer: movieReducers,
  userReducer: userReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
