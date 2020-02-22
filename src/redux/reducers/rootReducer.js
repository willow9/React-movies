import { combineReducers } from 'redux';
import reducers from './reducers';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  movieReducer: reducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
