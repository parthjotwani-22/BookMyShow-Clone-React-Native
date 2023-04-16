import {combineReducers} from 'redux';
import MovieReducer from './MovieDescription/reducer';
import ShowReducer from './ShowDescription/reducer';
import PurReducer from './PurchaseDescription/reducer';
const rootReducer = combineReducers({
  MovieReducer: MovieReducer,
  ShowReducer: ShowReducer,
  PurReducer: PurReducer,
});
export default rootReducer;
