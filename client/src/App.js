import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { inputNum } from './redux/actions/boardAction';
import { pencilNum } from './redux/actions/cellAction';
import Board from './components/Board';
import SideButtons from './components/SideButtons';
import './css/App.css';

function App(props) {
  useEffect(() => {
    const keyDown = (e) => {
      if (props.cellSelected) {
        if (!props.pencil) {
          if (e.key === 'Backspace' || e.key === 'Delete' ) {
            props.inputNum(' ');
          } else if (!isNaN(e.key) && e.key !== '0') {
            props.inputNum(e.key);
          }
        } else {
          if (e.key === 'Backspace' || e.key === 'Delete' ) {
            props.pencilNum(' ');
          } else if (!isNaN(e.key) && e.key !== '0') {
            props.pencilNum(e.key);
          }
        }
      }
    }

    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, [props.cellSelected, props.pencil]);

  return (
    <div className="app">
      <Board />
      <SideButtons />
    </div>
  );
}

const mapStateToProps = state => ({pencil: state.cells.pencil, cellSelected: state.cells.cellSelected});
export default connect(mapStateToProps, {inputNum, pencilNum})(App);
