export const AUTHENTICATED_TRUE = 'AUTHENTICATED_TRUE';
export const AUTHENTICATED_FALSE = 'AUTHENTICATED_FALSE';

export const authenticationAction = success => dispatch => {
  if (success) {
    dispatch({ type: AUTHENTICATED_TRUE });
  } else if (!success) {
    dispatch({ type: AUTHENTICATED_FALSE });
  }
};
