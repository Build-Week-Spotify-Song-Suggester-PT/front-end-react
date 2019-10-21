export const AUTHENTICATION_TRUE = 'AUTHENTICATION_TRUE';
export const AUTHENTICATION_FALSE = 'AUTHENTICATION_FALSE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

export const userDataAction = success => dispatch => {
  if (success) {
    dispatch({ type: AUTHENTICATION_TRUE });
  } else if (!success) {
    dispatch({ type: AUTHENTICATION_FALSE });
  }
};
