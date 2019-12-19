import React from 'react';
import uuidv4 from 'uuid/v4';
import '../css/PencilCell.css';

function PencilCell(props) {
  const display = {
    opacity: '0.75'
  }

  if (props.origCell) {
    display.opacity = '0.0';
  }

  let cells = [' ', ' ', ' ',
               ' ', ' ', ' ',
               ' ', ' ', ' '];
  const cellItems = cells.map(num => (
    <div key={uuidv4()}>{num === ' ' ? '\xA0' : num}</div>
  ));

  return (
    <div className="pencil-cell" style={display}>
      {cellItems}
    </div>
  );
}

export default PencilCell;
