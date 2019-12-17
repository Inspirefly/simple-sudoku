import React from 'react';
import Board from './components/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'hard',
      unsolved: [],
      solved: []
    } 
  }

  componentDidMount() {
    this.getpuzzles();
  }

  getpuzzles = () => {
    let num = Math.floor((Math.random() * 100) + 1);
    num = ("000" + num).slice(-3);
    console.log(num);
    fetch(`/api/puzzles/${this.state.difficulty}/unsolved/${num}`)
      .then(res => res.json())
      .then(puzzle => this.setState({unsolved: puzzle}));
    fetch(`/api/puzzles/${this.state.difficulty}/solved/${num}`)
      .then(res => res.json())
      .then(puzzle => this.setState({solved: puzzle}));
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
