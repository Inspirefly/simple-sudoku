import React from 'react';
import { connect } from 'react-redux';
import { togglePencil } from '../redux/actions/cellAction';
import '../css/SideButtons.css';

function SideButtons(props) {
  const pencilStyles = {
    backgroundColor: 'white'
  };

  if (props.pencil) {
    pencilStyles.backgroundColor = 'gray';
  }

  return (
    <div id="side-buttons">
      <div id="pencil">
        <button style={pencilStyles} onClick={props.togglePencil}>Pencil</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({pencil: state.cells.pencil});
const mapDispatchToProps = {togglePencil};
export default connect(mapStateToProps, mapDispatchToProps)(SideButtons);
