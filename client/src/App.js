import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { inputNum } from './redux/actions/boardAction';
import Board from './components/Board';
import SideButtons from './components/SideButtons';
import './css/App.css';

function App(props) {
  useEffect(() => {
    const keyDown = (e) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        props.inputNum(' ');
      } else if (!isNaN(e.key) && e.key !== '0') {
        props.inputNum(e.key);
      }
    }

    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  return (
    <div className="app">
      <Board />
      <SideButtons />
    </div>
  );
}

export default connect(null, {inputNum})(App);
