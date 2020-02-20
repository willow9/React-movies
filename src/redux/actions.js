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
    .then(res =>{
      dispatch({
        type: 'FETCH_MOVIES',
        payload: res.data
      })
      
    }
    )
    .catch(err => console.log(err));
  }
