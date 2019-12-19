import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import Box from './Box';
import '../css/Board.css';
import { fetchUnsolved, fetchSolved } from '../redux/actions/boardAction';

function Board(props)  {
  // Difficulty should really be a state in redux store, but too much setup rn, should change esp. when i get to buttons
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    let num = Math.floor((Math.random() * 100) + 1);
    num = ("000" + num).slice(-3);
    console.log(`Puzzle No: ${num}`);
    props.fetchUnsolved(num, difficulty);
    props.fetchSolved(num, difficulty);
  }, []);

  let rows = [];
  let row = [];
  for (let i = 0; i < 9; i++) {
    row.push(<Box key={uuidv4()} boxNum={i}/>);
    if ((i + 1) % 3 === 0) {
      rows.push(row);
      row = [];
    }
  }

  return (
    <div id="board">
      <div id="first-row-board" className="row-board">
        {rows[0]}
      </div>
      <div id="second-row-board" className="row-board">
        {rows[1]}
      </div>
      <div id="third-row-board" className="row-board">
        {rows[2]}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({solved: state.puzzles.solved});
const mapDispatchToProps = {fetchUnsolved, fetchSolved};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
