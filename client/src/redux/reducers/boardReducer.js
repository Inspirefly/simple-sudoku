import { FETCH_UNSOLVED, FETCH_SOLVED } from '../actions/types';

const initialState = {
  unsolved: [],
  solved: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_UNSOLVED:
      return {
        ...state,
        unsolved: action.payload
      }
    case FETCH_SOLVED:
      return {
        ... state,
        solved: action.payload
      }
    default:
      return state;
  }
}
