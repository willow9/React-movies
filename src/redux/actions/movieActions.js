import axios from 'axios';
import 'dotenv/config';

export const fetchMovies = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('movies')
      .get()
      .then(querySnapshot => {
        const movies = [];
        querySnapshot.forEach(doc => {
          movies.push(doc.data());
        });
        dispatch({ type: 'FETCH_MOVIES', payload: movies });
      })
      .catch(err => console.log(err));
  };
};

export const fetchMovie = imdbId => dispatch => {
  axios
    .get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OIMDB_API_KEY}&i=${imdbId}&plot=full`
    )
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
    .get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OIMDB_API_KEY}&s=${title}`
    )
    .then(res => {
      dispatch({
        type: 'FETCH_MOVIES',
        payload: res.data.Search
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
        if (doc.data().movies) {
          firestore
            .collection('movies')
            .where('imdbID', 'in', [...doc.data().movies])
            .get()
            .then(querySnapshot => {
              const movies = [];
              querySnapshot.forEach(movie => {
                movies.push(movie.data());
              });
              dispatch({ type: 'FETCH_USER_MOVIES', payload: movies });
            })
            .catch(error => {
              console.log('Error getting documents: ', error);
            });
        } else {
          dispatch({ type: 'FETCH_USER_MOVIES_ERROR' });
        }
      });
  };
};
export const clearMovies = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'FETCH_USER_MOVIES_ERROR' });
  };
};
