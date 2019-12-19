import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import '../css/PencilCell.css';

function PencilCell(props) {
  const display = {
    opacity: '0.75'
  }

  if (props.origCell) {
    display.opacity = '0.0';
  }

  const cells = props.pencilCells[props.location[0]][props.location[1]];
  const cellItems = cells.map(num => (
    <div key={uuidv4()}>{num === ' ' ? '\xA0' : num}</div>
  ));

  return (
    <div className="pencil-cell" style={display}>
      {cellItems}
    </div>
  );
}

const mapStateToProps = state => ({pencilCells: state.cells.pencilCells});
export default connect(mapStateToProps, null)(PencilCell);
