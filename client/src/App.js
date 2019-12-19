import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { inputNum } from './redux/actions/boardAction';
import Board from './components/Board';
import SideButtons from './components/SideButtons';
import './css/App.css';

function App(props) {
  useEffect(() => {
    const keyDown = (e) => {
      if (props.cellSelected) {
        if (e.key === 'Backspace' || e.key === 'Delete' ) {
          props.inputNum(' ');
        } else if (!isNaN(e.key) && e.key !== '0') {
          props.inputNum(e.key);
        }
      }
    }

    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, [props.cellSelected]);

  return (
    <div className="app">
      <h1>Simple Sudoku</h1>
      <Board />
      <SideButtons />
    </div>
  );
}

const mapStateToProps = state => ({cellSelected: state.cells.cellSelected});
export default connect(mapStateToProps, {inputNum})(App);
