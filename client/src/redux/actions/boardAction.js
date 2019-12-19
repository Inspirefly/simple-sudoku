import { FETCH_UNSOLVED, FETCH_SOLVED, INPUT_NUM, CHECK_MISTAKES, SOLVE } from './types';

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
  dispatch({
    type: INPUT_NUM,
    payload: { location, num }
  });
}

export const checkMistakes = () => ({
  type: CHECK_MISTAKES
});

export const solve = () => ({
  type: SOLVE
});
