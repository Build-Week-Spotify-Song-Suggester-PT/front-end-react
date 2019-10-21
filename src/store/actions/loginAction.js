import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import { red } from 'ansi-colors';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginAction = credentials => dispatch => {
  axiosWithAuth()
    .post('/acconts/register', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push(`/user/${res.data.id}`);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.message
      });
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
