import React from 'react';
import '../css/Cell.css';

function Cell(props) {
  return (
    <div id="cell">
      <div>{props.num}</div>
    </div>
  );
}

export default Cell;
