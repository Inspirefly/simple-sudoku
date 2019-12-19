import { FETCH_UNSOLVED, FETCH_SOLVED, INPUT_NUM } from '../actions/types';

const initialState = {
  unsolved: [],
  solved: [],
  user: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_UNSOLVED:
      return {
        ...state,
        unsolved: action.payload,
        user: action.payload
      }
    case FETCH_SOLVED:
      return {
        ...state,
        solved: action.payload
      }
    case INPUT_NUM:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
