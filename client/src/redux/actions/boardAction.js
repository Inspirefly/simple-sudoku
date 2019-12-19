import { FETCH_UNSOLVED, FETCH_SOLVED, INPUT_NUM } from './types';

export const fetchUnsolved = (num, difficulty) => dispatch => {
  fetch(`/api/puzzles/${difficulty}/unsolved/${num}`)
    .then(res => res.json())
    .then(puzzle => dispatch({
      type: FETCH_UNSOLVED,
      payload: puzzle
    }));
}

export const fetchSolved = (num, difficulty) => dispatch => {
  fetch(`/api/puzzles/${difficulty}/solved/${num}`)
    .then(res => res.json())
    .then(puzzle => dispatch({
      type: FETCH_SOLVED,
      payload: puzzle
    }));
}

export const inputNum = num => (dispatch, getState) => {
  const location = getState().cells.selectedCell;
  let user = JSON.parse(JSON.stringify(getState().puzzles.user));
  if (getState().cells.cellSelected && getState().puzzles.unsolved[location[0]][location[1]] === ' ')
    user[location[0]][location[1]] = num;
  dispatch({
    type: INPUT_NUM,
    payload: user
  });
}
