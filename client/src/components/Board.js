import React from 'react';
import Box from './Box';
import '../css/Board.css';

function Board(props)  {
  return (
    <div id="board">
      <div id="first-row-board" class="row-board">
        <Box />
        <Box />
        <Box />
      </div>
      <div id="second-row-board" class="row-board">
        <Box />
        <Box />
        <Box />
      </div>
      <div id="third-row-board" class="row-board">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default Board;
