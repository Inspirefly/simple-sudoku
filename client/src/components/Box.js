import React from 'react';
import uuidv4 from 'uuid/v4';
import Cell from './Cell'
import '../css/Box.css'

function Box(props) {

  let rows = [];
  let row = [];
  if (props.puzzle) {
    for (let i = 0; i < 9; i++) {
      row.push(<Cell key={uuidv4()} num={props.puzzle[i]} />);
      if ((i + 1) % 3 === 0) {
        rows.push(row);
        row = [];
      }
    }
  }

  return (
    <div id="box">
      <div id="first-row-box" className="row-box">
        {rows[0]}
      </div>
      <div id="second-row-box" className="row-box">
        {rows[1]}
      </div>
      <div id="third-row-box" className="row-box">
        {rows[2]}
      </div>
    </div>
  );
}

export default Box;
