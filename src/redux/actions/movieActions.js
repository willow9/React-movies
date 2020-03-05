import axios from 'axios';
import { APIKey } from '../../APIKey';

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
    // const firebase = getFirebase();
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
