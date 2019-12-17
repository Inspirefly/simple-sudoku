import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from './Box';
import '../css/Board.css';
import { fetchUnsolved, fetchSolved } from '../redux/actions/boardAction';

function Board(props)  {
  // Difficulty should really be a state in redux store, but too much setup rn, should change esp. when i get to buttons
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    let num = Math.floor((Math.random() * 100) + 1);
    num = ("000" + num).slice(-3);
    props.fetchUnsolved(num, difficulty);
    props.fetchSolved(num, difficulty);
  }, []);

  return (
    <div id="board">
      <div id="first-row-board" class="row-board">
        <Box />
        <Box />
        <Box />
      </div>
      <div id="second-row-board" class="row-board">
        <Box />
        <Box />
        <Box />
      </div>
      <div id="third-row-board" class="row-board">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({unsolved: state.puzzles.unsolved, solved: state.puzzles.solved});
const mapDispatchToProps = {fetchUnsolved, fetchSolved};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
