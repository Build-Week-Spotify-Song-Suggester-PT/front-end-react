import { axiosWithAuth } from '../../../Auth/AxiosWithAuth';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const signupAction = cred => async dispatch => {
  let caseSensitivity = {
    ...cred,
    email: cred.email.toLowerCase()
  };
  axiosWithAuth()
    .post('/accounts/register', caseSensitivity)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: REGISTER_FAIL });
    });
};
