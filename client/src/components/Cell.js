import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../redux/actions/cellAction';
import '../css/Cell.css';

function Cell(props) {
  let origCell;
  if (props.location && props.unsolved.length > 0)
    origCell = props.unsolved[props.location[0]][props.location[1]] !== ' ';

  const setLocation = () => {
    props.setLocation(props.location)
  }

  const backgroundColor = {
    backgroundColor: 'white'
  }

  if (props.isSelectedCell) {
    backgroundColor.backgroundColor = 'lightgray';
  }

  let fontColor = {
    color: 'black'
  }

  if (!props.correct && (props.doCheckMistakes || props.doSolve)) {
    fontColor.color = 'tomato';
  }

  return (
    <div className="cell" onClick={setLocation} style={backgroundColor}>
      <div className="cell-number" style={fontColor}>{origCell ? <strong>{props.num}</strong> : props.num}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let num = ' ';
  let correct = true;
  let doSolve = state.puzzles.solve;
  let doCheckMistakes = state.puzzles.checkMistakes;

  if (ownProps.location && state.puzzles.user.length > 0) {
    num = state.puzzles.user[ownProps.location[0]][ownProps.location[1]];
    if (doSolve) {
      if (num === ' ') {
        num = state.puzzles.solved[ownProps.location[0]][ownProps.location[1]];
        correct = false;
      } else {
        correct = num === state.puzzles.solved[ownProps.location[0]][ownProps.location[1]];
        if (!correct)
          num = state.puzzles.solved[ownProps.location[0]][ownProps.location[1]];
      }
    } else if (doCheckMistakes) {
      correct = num === state.puzzles.solved[ownProps.location[0]][ownProps.location[1]];
    }
  }

  let isSelectedCell = false; 
  if (JSON.stringify(state.cells.selectedCell) === JSON.stringify(ownProps.location))
    isSelectedCell = true;

  return ({
    unsolved: state.puzzles.unsolved,
    isSelectedCell,
    num,
    correct,
    doCheckMistakes,
    doSolve
  });
};

export default connect(mapStateToProps, {setLocation})(Cell);
