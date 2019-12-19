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

  return (
    <div className="cell" onClick={setLocation} style={backgroundColor}>
      <div className="cell-number">{origCell ? <strong>{props.num}</strong> : props.num}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let num = ' ';
  if (ownProps.location && state.puzzles.user.length > 0)
    num = state.puzzles.user[ownProps.location[0]][ownProps.location[1]];
  let isSelectedCell = false; 
  if (JSON.stringify(state.cells.selectedCell) === JSON.stringify(ownProps.location))
    isSelectedCell = true;
  return ({
    unsolved: state.puzzles.unsolved,
    isSelectedCell,
    num
  });
};

export default connect(mapStateToProps, {setLocation})(Cell);
