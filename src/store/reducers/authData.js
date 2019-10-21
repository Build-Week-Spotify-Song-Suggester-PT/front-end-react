import {} from '../actions/authDataActions/loginAction';

const initialState = {
  authenticated: false,
  message: '',
  authError: false
};

export const authData = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
