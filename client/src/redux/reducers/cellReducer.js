import { SET_LOCATION } from '../actions/types';

const initialState = {
  selectedCell: [],
  cellSelected: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        selectedCell: action.payload,
        cellSelected: true
      }
    default:
      return state;
  }
}
