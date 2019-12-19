import React from 'react';
import { connect } from 'react-redux';
import '../css/CellNumber.css';

function CellNumber(props) {
  return (
    <div className='cell-number'>
      {props.origCell ? <strong>{props.num}</strong> : props.num}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let num = ' ';
  if (ownProps.location && state.puzzles.user.length > 0)
    num = state.puzzles.user[ownProps.location[0]][ownProps.location[1]];
  return ({num});
};

export default connect(mapStateToProps, null)(CellNumber);
