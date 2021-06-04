import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

//RETURN ERRORS if there is an error add it to states
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

//Clear Errors return initial state
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
