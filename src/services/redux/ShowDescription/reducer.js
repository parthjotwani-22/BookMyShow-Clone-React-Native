import types from './types';
const intialstate = {
  showData: [],
};
const newstate = {
  showData: [],
};
const update = (obj, arr) => {
  arr = arr.filter(item => {
    obj.showName != item.showName;
  });
  arr.push(obj);
  return arr;
};
const ShowReducer = (state = newstate, action) => {
  switch (action.type) {
    case types.showFound:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        showData: action.playload.resposejson,
      };
    case types.showUpdated:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        showData: update(action.playload.resposejson, ...state.showData),
      };
    case types.showNotFound:
      return {
        showData: action.payload.responseJson,
      };

    default:
      return state;
  }
};
export default ShowReducer;
