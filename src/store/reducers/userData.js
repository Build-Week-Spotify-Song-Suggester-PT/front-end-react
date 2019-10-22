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
  userID: null,
  message: ''
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userID: action.payload.id,
        message: action.payload.message
      };
    case LOGIN_FAIL:
      return {
        ...state,
        userID: null,
        message: ''
      };
    case REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        userID: action.payload.id,
        message: `Welcome, ${action.payload.name}`
      };
    case REGISTER_FAIL:
      return {
        ...state,
        userID: null,
        message: ''
      };
    case CLEAR_AUTH_DATA:
      return initialState;
    default:
      return state;
  }
};
