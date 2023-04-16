import types from './types';

export const movieFound = resposejson => {
  console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.movieFound, playload: {resposejson}});
  };
};

export const movieNotFound = responseJson => {
  console.log('No movie Exsist', responseJson);
  return dispatch => {
    dispatch({type: types.movieNotFound, payload});
  };
};
