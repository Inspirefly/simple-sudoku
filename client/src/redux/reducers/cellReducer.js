import { SET_LOCATION, TOGGLE_PENCIL, PENCIL_NUM } from '../actions/types';

let pencilCells = [];
for (let i = 0; i < 9; i++) {
  let box = [];
  for (let j = 0; j < 9; j++) {
    let cell = [];
    for (let k = 0; k < 9; k++) {
      cell.push(' ');
    }
    box.push(cell);
  }
  pencilCells.push(box);
}

const initialState = {
  selectedCell: [],
  cellSelected: false,
  pencilCells,
  pencil: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        selectedCell: action.payload,
        cellSelected: true
      }
    case TOGGLE_PENCIL:
      return {
        ...state,
        pencil: !state.pencil
      }
    case PENCIL_NUM:
      let cpyPencilCells = JSON.parse(JSON.stringify(state.pencilCells));
      const location0 = state.selectedCell[0];
      const location1 = state.selectedCell[1];
      if (action.payload === ' ') {
        for (let i = 0; i < 9; i++) {
          cpyPencilCells[location0][location1][i] = action.payload;
        }
      } else if (cpyPencilCells[location0][location1][Number(action.payload) - 1] !== ' ') {
        cpyPencilCells[location0][location1][Number(action.payload) - 1] = ' ';
      } else {
        cpyPencilCells[location0][location1][Number(action.payload) - 1] = action.payload;
      }
      return {
        ...state,
        pencilCells: cpyPencilCells
      }
    default:
      return state;
  }
}
