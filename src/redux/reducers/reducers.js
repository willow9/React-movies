const initialState = {
  users: [
    { id: 1, firstName: 'Lara', lastName: 'Kroft' },
    { id: 2, firstName: 'Barry', lastName: 'White' },
    { id: 3, firstName: 'Nataly', lastName: 'Gomez' },
    { id: 4, firstName: 'Serena', lastName: 'Serenity' },
    { id: 5, firstName: 'Lord', lastName: 'OfSomething' },
    { id: 6, firstName: 'Off', lastName: 'Spring' }
  ],
  movies: [
    { id: 1, Title: 'Shark' },
    { id: 2, Title: 'Vampires' },
    { id: 3, Title: 'Valkirie' },
    { id: 4, Title: 'Wespa' }
  ],
  authError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userCount: state.userCount + 1
      };
    case 'FETCH_MOVIES':
      // console.log(action.payload.Search);

      return {
        ...state,
        movies: action.payload.Search
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.err.message
      };

    case 'LOGIN_SUCCESS':
      console.log('auth success');
      return {
        ...state,
        authError: null
      };

    case 'SIGNOUT_SUCCESS':
      console.log('singed out successfuly');
      break;

    case 'SIGNUP_SUCCES':
      console.log('signed up successfuly');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.log('signed up failed');
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};
export default reducer;
