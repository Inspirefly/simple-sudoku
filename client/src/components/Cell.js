import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../redux/actions/cellAction';
import '../css/Cell.css';
import CellNumber from './CellNumber';
import PencilBox from './PencilBox';

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
      <PencilBox origCell={origCell} location={props.location} />
      <CellNumber origCell={origCell} location={props.location} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let isSelectedCell = false; 
  if (JSON.stringify(state.cells.selectedCell) === JSON.stringify(ownProps.location))
    isSelectedCell = true;
  return ({
    unsolved: state.puzzles.unsolved,
    isSelectedCell,
  });
};

export default connect(mapStateToProps, {setLocation})(Cell);
