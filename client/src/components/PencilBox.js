import React from 'react';
import uuidv4 from 'uuid/v4';
import PencilCell from './PencilCell';
import '../css/PencilBox.css';

function PencilBox(props) {
  const display = {
    opacity: '0.75'
  }

  if (props.origCell) {
    display.opacity = '0.0';
  }

  let cells = [];
  for (let i = 0; i < 9; i++) {
    cells.push(<PencilCell key={uuidv4()} location={[...props.location, i]} />);
  }

  return (
    <div className="pencil-box" style={display}>
      {cells}
    </div>
  );
}

export default PencilBox;
