import {
  AUTHENTICATED_TRUE,
  AUTHENTICATED_FALSE
} from '../actions/authenticationAction';

const initialState = {
  authenticated: false
};

export const auth = (state = initialState, action) => {
  switch (action.payload) {
    case AUTHENTICATED_TRUE:
      return {
        ...state,
        authenticated: true
      };
    case AUTHENTICATED_FALSE:
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
};
