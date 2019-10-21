import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/authDataActions/loginAction';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/authDataActions/signupAction';

import { CLEAR_AUTH_DATA } from '../actions/authDataActions/clearAuthData';

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
    case REGISTER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        message: '',
        authError: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        authenticated: false,
        message: '',
        authError: true
      };
    case CLEAR_AUTH_DATA:
      return initialState;
    default:
      return state;
  }
};
