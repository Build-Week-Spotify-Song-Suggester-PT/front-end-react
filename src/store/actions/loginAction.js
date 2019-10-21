import { axiosWithAuth } from '../../Auth/AxiosWithAuth';
import { userDataAction } from './userDataAction';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginAction = credentials => dispatch => {
  axiosWithAuth()
    .post('/acconts/register', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      userDataAction(true);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.message
      });
    })
    .catch(() => {
      userDataAction(false);
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
