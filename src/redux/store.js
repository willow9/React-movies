import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevtools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/rootReducer';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import FBConfig from '../config/FBConfig';

const midleware = [thunk];
// const initialState = {}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(FBConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }), // redux binding for firebase
    reduxFirestore(FBConfig) // redux bindings for firestore
  )
);
export default store;
