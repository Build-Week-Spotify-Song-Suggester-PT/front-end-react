import {
  AUTHENTICATION_TRUE,
  AUTHENTICATION_FALSE,
  AUTHENTICATION_ERROR
} from '../actions/userDataAction';

const initialState = {
  authenticated: false,
  userID: null,
  message: '',
  authError: false
};

export const userData = (state = initialState, action) => {
  switch (action.payload) {
    case AUTHENTICATION_TRUE:
      return {
        ...state,
        authenticated: true
      };
    case AUTHENTICATION_FALSE:
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
};
