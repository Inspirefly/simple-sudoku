import { FETCH_UNSOLVED, FETCH_SOLVED } from './types';

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
