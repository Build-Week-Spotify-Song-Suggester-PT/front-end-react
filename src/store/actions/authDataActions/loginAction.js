import { axiosWithAuth } from '../../../Auth/AxiosWithAuth';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginAction = cred => async dispatch => {
  let caseSensitivity = {
    ...cred,
    email: cred.email.toLowerCase()
  };
  axiosWithAuth()
    .post('/accounts/login', caseSensitivity)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAIL });
    });
};
