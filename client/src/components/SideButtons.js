import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSolved, fetchUnsolved, checkMistakes, solve } from '../redux/actions/boardAction';
import '../css/SideButtons.css';

function SideButtons(props) {
  const changeDifficulty = (difficulty) => {
    let num = Math.floor((Math.random() * 100) + 1);
    num = ("000" + num).slice(-3);
    console.log(`${difficulty} puzzle no: ${num}`);
    props.fetchUnsolved(num, difficulty);
    props.fetchSolved(num, difficulty);
  }

  const newPuzzle = (e) => {
    changeDifficulty(e.target.name);
  }

  return (
    <div id="side-buttons">
      <button name="checkMistakes" onClick={props.checkMistakes}>Check Mistakes</button>
      <button name="solve" onClick={props.solve}>Solve</button>
      <div id="newPuzzleHeader">New Puzzle:</div>
      <div className="options">
        <button name="easy" onClick={newPuzzle}>Easy</button>
        <button name="medium" onClick={newPuzzle}>Medium</button>
        <button name="hard" onClick={newPuzzle}>Hard</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {fetchSolved, fetchUnsolved, checkMistakes, solve};
export default connect(null, mapDispatchToProps)(SideButtons);
