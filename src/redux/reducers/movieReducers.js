import initialState from "./initialState"

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      //  console.log(action.payload.Search);
      return {
        ...state,
        movies: action.payload.Search
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    
    default:
      return state;
  }
};
export default movieReducer;
