import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/authDataActions/loginAction';

const initialState = {
  userID: null
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
    default:
      return state;
  }
};
