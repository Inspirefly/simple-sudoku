const express = require('express');
const puzzles = require('../../api/puzzles.json');

const router = express.Router();

router.get('/', (req, res) => res.json(puzzles));

router.get('/:level/', (req, res) => res.json(puzzles[req.params.level]));
router.get('/:level/:state', (req, res) => res.json(puzzles[req.params.level][req.params.state]));
router.get('/:level/:state/:no', (req, res) => res.json(changeJsonRowToBox(puzzles[req.params.level][req.params.state][req.params.no])));

// 0 1 2
// 3 4 5
// 6 7 8
function changeJsonRowToBox(jsonArr) {
  let puzzle = [];
  for (let i = 0; i < 9; i++) {
    let box = []
    for (let j = 0; j < 9; j++) {
      box.push(' ');
    }
    puzzle.push(box);
  }
 
  const boxes = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      puzzle[boxes[Math.ceil((i + 1) / 3.0) - 1][Math.ceil((j + 1) / 3.0) - 1]][boxes[i % 3][j % 3]] = jsonArr[i][j];
    }
  }
  console.log(puzzle);
  return puzzle;
}

module.exports = router;
