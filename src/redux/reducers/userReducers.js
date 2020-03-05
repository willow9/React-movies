import initialState from "./initialState"

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
         console.log('users fetched successfuly');
        //   console.log(action.users);
        return {
          ...state,
          users: action.users
        };
      default:
        return state;
    }
  };
  export default userReducer;
  