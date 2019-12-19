import React from 'react';
import { connect } from 'react-redux';
import { checkMistakes, solve } from '../redux/actions/boardAction';
import '../css/SideButtons.css';

function SideButtons(props) {
  return (
    <div id="side-buttons">
      <button name="check-mistakes" onClick={props.checkMistakes}>Check Mistakes</button>
      <button name="solve" onClick={props.solve}>Solve</button>
    </div>
  );
}

const mapDispatchToProps = {checkMistakes, solve};
export default connect(null, mapDispatchToProps)(SideButtons);
