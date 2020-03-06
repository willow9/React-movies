import axios from 'axios';
import { APIKey } from '../../APIKey';

export const fetchMovies = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('movies')
      .get()
      .then(querySnapshot => {
        let movies = [];
        querySnapshot.forEach(doc => {
          movies.push(doc.data());
        });
        dispatch({ type: 'FETCH_MOVIES', payload: movies });
        
      })
      .catch(err => console.log(err));;
  };
};

export const fetchMovie = imdbId => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${imdbId}&plot=full`)
    .then(res => {
      dispatch({
        type: 'FETCH_MOVIE',
        payload: res.data
      });
    })
    .catch(err => console.log(err));
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

export const addMovieToDB = movie => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('movies')
      .doc(movie.imdbID)
      .set(movie)
      .catch(err => {
        console.log(err);
      });
  };
};
export const fetchUserMovies = userId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('users')
      .doc(userId)
      .get()
      .then(doc => {
        // console.log('Document data:', doc.data().movies);
        doc.data().movies
          ? firestore
              .collection('movies')
              .where('imdbID', 'in', [...doc.data().movies])
              .get()
              .then(querySnapshot => {
                let movies = [];
                querySnapshot.forEach(doc => {
                  // console.log(doc.id, ' => ', doc.data());

                  movies.push(doc.data());
                });
                dispatch({ type: 'FETCH_USER_MOVIES', payload: movies });
              })
              .catch(function(error) {
                console.log('Error getting documents: ', error);
              })
          : dispatch({ type: 'FETCH_USER_MOVIES_ERROR' });
      });
  };
};
