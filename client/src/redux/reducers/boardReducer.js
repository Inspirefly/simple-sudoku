import { FETCH_UNSOLVED, FETCH_SOLVED, INPUT_NUM, CHECK_MISTAKES, SOLVE } from '../actions/types';

const initialState = {
  unsolved: [],
  solved: [],
  user: [],
  checkMistakes: false,
  solve: false
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
      let user = JSON.parse(JSON.stringify(state.user));
      const location0 = action.payload.location[0];
      const location1 = action.payload.location[1];
      
      if (state.unsolved[location0][location1] === ' ') {
        if (user[location0][location1] !== action.payload.num) {
          user[location0][location1] = action.payload.num;
        } else {
          user[location0][location1] = ' ';
        }
      }
      return {
        ...state,
        user
      }
    case CHECK_MISTAKES:
      return {
        ...state,
        checkMistakes: !state.checkMistakes
      }
    case SOLVE:
      return {
        ...state,
        solve: !state.solve
      }
    default:
      return state;
  }
}
