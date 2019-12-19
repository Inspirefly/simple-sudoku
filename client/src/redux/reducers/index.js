import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import cellReducer from './cellReducer';

export default combineReducers({
  puzzles: boardReducer,
  cells: cellReducer
});