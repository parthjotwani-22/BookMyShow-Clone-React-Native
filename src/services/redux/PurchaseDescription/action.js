import types from './types';

export const purFound = resposejson => {
  //console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.purFound, payload: {resposejson}});
  };
};

export const purNotFound = responseJson => {
  //console.log('No movie Exsist', responseJson);
  return dispatch => {
    dispatch({type: types.purNotFound, payload});
  };
};
