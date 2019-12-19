import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../redux/actions/cellAction';
import '../css/Cell.css';
import PencilCell from './PencilCell';

function Cell(props) {
  const [origCell, setOrigCell] = useState(props.unsolved[props.location[0]][props.location[1]] !== ' ');

  const setLocation = () => {
    props.setLocation(props.location)
  }

  const backgroundColor = {
    backgroundColor: 'white'
  }

  if (JSON.stringify(props.location) === JSON.stringify(props.selectedCell)) {
    backgroundColor.backgroundColor = 'lightgray';
  }

  return (
    <div className="cell" onClick={setLocation} style={backgroundColor}>
      <PencilCell origCell={origCell}/>
      <div className="cell-number">{origCell ? <strong>{props.num}</strong> : props.num}</div>
    </div>
  );
}


const mapStateToProps = state => ({unsolved: state.puzzles.unsolved, selectedCell: state.cells.selectedCell});
export default connect(mapStateToProps, {setLocation})(Cell);
