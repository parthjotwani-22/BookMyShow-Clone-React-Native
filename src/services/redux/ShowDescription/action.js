import types from './types';

export const showFound = resposejson => {
  //console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.showFound, playload: {resposejson}});
  };
};
export const showUpdated = resposejson => {
  //console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.showUpdated, playload: {resposejson}});
  };
};

export const showNotFound = responseJson => {
  //console.log('No movie Exsist', responseJson);
  return dispatch => {
    dispatch({type: types.showNotFound, payload});
  };
};
