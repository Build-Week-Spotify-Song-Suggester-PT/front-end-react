export const CLEAR_AUTH_DATA = 'CLEAR_AUTH_DATA';

export const clearAuthData = () => dispatch => {
  dispatch({ type: CLEAR_AUTH_DATA });
};
