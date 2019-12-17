import React from 'react';
import Cell from './Cell'
import '../css/Box.css'

function Box(props) {
  return (
    <div id="box">
      <div id="first-row-box" class="row-box">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div id="second-row-box" class="row-box">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div id="third-row-box" class="row-box">
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
}

export default Box;
