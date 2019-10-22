import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/authDataActions/loginAction';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/authDataActions/signupAction';

const initialState = {
  userID: null,
  message: ''
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userID: action.payload.id
      };
    case LOGIN_FAIL:
      return {
        ...state,
        userID: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userID: action.payload.id
      };
    case REGISTER_FAIL:
      return {
        ...state,
        userID: null
      };
    default:
      return state;
  }
};
