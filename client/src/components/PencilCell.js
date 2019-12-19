import React from 'react';
import { connect } from 'react-redux';

function PencilCell(props) {
  return (
    <div>
      {props.num === ' ' ? '\xA0' : props.num}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let num = ' ';
  if (ownProps.location && state.cells.pencilCells)
    num = state.cells.pencilCells[ownProps.location[0]][ownProps.location[1]][ownProps.location[2]];
  return({num});
};

export default connect(mapStateToProps, null)(PencilCell);
