import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/loginAction';

const initialState = {
  message: '',
  error: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        message: '',
        error: action.payload
      };
    default:
      return state;
  }
};
