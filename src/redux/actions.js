import axios from 'axios';
import { APIKey } from '../APIKey';

export const addUser = user => {
  return {
    type: 'ADD_USER'
  };
};
export const fetchMovies = () => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=Dracula`)
    .then(res => {
      dispatch({
        type: 'FETCH_MOVIES',
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const fetchMovie = imdbId => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${imdbId}&plot=full`)
    .then(res => {
      dispatch({
        type: 'FETCH_MOVIE',
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => console.log(err));
};

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(payload => {
        dispatch({ type: 'LOGIN_SUCCESS', payload });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNOUT_ERROR', err });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  };
};

export const fetchUsers = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('users')
      .limit(10)
      .get()
      .then(querySnapshot => {
        const users = [];
        querySnapshot.forEach(doc => {
          users.push({ id: doc.id, ...doc.data() });
          return users;
        });
        dispatch({ type: 'FETCHUSERS_SUCCESS', users });
      });
  };
};

export const searchMovies = title => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${title}`)
    .then(res => {
      dispatch({
        type: 'FETCH_MOVIES',
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addToFavorites = movie => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log('preparing to add video');
    console.log(movie);
    firestore
      .collection('movies')
      .doc(movie.imdbID)
      .set(movie)
      .then(() => {
        'movie added';
      })
      .catch(err => {
        console.log(err);
      });
  };
};