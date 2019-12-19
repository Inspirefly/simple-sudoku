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

  let cells = JSON.parse(props.cells);
  const cellItems = cells.map(num => (
    <div key={uuidv4()}>{num === ' ' ? '\xA0' : num}</div>
  ));

  return (
    <div className="pencil-cell" style={display}>
      {cellItems}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  // Stringify because redux rerenders component based on shallow copy (===) which will always
  // return false with new arrays, even if contents are the same, since the references aren't
  let cells = JSON.stringify(state.cells.pencilCells[ownProps.location[0]][ownProps.location[1]]);
  return({cells});
};
export default connect(mapStateToProps, null)(PencilCell);
