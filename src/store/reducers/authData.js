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
  loginAuthError: false,
  registerAuthError: false
};

export const authData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loginAuthError: false,
        registerAuthError: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        authenticated: false,
        loginAuthError: true,
        registerAuthError: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loginAuthError: false,
        registerAuthError: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        authenticated: false,
        loginAuthError: false,
        registerAuthError: true
      };
    case CLEAR_AUTH_DATA:
      return initialState;
    default:
      return state;
  }
};
