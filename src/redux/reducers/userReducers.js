import initialState from './initialState';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'FETCH_USERS_SUCCESS':
      console.log(action.users);
      return {
        ...state,
        users: action.users
      };
    case 'FETCH_USER_SUCCESS':
      console.log(action.user);
      return {
        ...state,
        user: action.user,
        error: ''
      };
    case 'FETCH_USER_ERROR':
      console.log(action.payload);
      return {
        ...state,
        findUserError: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
