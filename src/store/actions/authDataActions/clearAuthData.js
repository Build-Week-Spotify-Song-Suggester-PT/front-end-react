export const CLEAR_AUTH_DATA = 'CLEAR_FORM_DATA';

export const clearAuthData = () => dispatch => {
  dispatch({ type: CLEAR_AUTH_DATA });
};
