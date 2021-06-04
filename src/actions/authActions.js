import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';
import { returnErrors } from './errorActions';

import * as API from '../api/index';

//Check token validation
export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING,
  });
  const token = getState().authReducer.token;
  //tokenConfig function from this page
  API.getUser(tokenConfig(token))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
//Register
export const register = newUser => dispatch => {
  //tokenConfig function is from line94
  API.createUser(newUser, tokenConfig())
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({ type: REGISTER_FAIL });
    });
};
//Login actions
export const login = newUser => dispatch => {
  //tokenConfig function is from line94
  API.login(newUser, tokenConfig())
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({ type: LOGIN_FAIL });
    });
};
//Logout
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
//Set up config
export const tokenConfig = token => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
