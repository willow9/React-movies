import initialState from './initialState';

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload.Search
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    case 'FETCH_USER_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    case 'FETCH_USER_MOVIES_ERROR':
      return {
        ...state,
        movies: []
      };

    default:
      return state;
  }
};
export default movieReducer;
