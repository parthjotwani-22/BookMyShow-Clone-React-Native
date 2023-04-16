import types from './types';
const intialstate = {
  purData: null,
};
const newstate = {
  purData: [],
};

const PurReducer = (state = newstate, action) => {
  switch (action.type) {
    case types.purFound:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        purData: action.payload.resposejson,
      };

    case types.purNotFound:
      return {
        purData: action.payload.responseJson,
      };

    default:
      return state;
  }
};
export default PurReducer;
