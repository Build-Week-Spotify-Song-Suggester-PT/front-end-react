import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/authDataActions/loginAction';

const initialState = {
  authenticated: false,
  message: '',
  authError: false
};

export const authData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        message: action.payload.message,
        authError: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        authenticated: false,
        message: '',
        authError: true
      };
    default:
      return state;
  }
};
