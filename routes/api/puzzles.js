const express = require('express');
const puzzles = require('../../api/puzzles.json');

const router = express.Router();

router.get('/', (req, res) => res.json(puzzles));

router.get('/:level/', (req, res) => res.json(puzzles[req.params.level]));
router.get('/:level/:state', (req, res) => res.json(puzzles[req.params.level][req.params.state]));
router.get('/:level/:state/:no', (req, res) => res.json(puzzles[req.params.level][req.params.state][req.params.no]));

module.exports = router;
