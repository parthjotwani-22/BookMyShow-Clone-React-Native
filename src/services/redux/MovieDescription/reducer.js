import types from './types';
const intialstate = {
  movieData: null,
};

const MovieReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.movieFound:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        movieData: action.playload.resposejson,
      };
    case types.movieNotFound:
      return {
        movieData: action.payload.responseJson,
      };
    default:
      return state;
  }
};
export default MovieReducer;
