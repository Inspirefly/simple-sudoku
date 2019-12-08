import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {hard007: []}
  componentDidMount() {
    this.getpuzzles();
  }

  getpuzzles = () => {
    fetch('/api/puzzles/hard/solved/007')
      .then(res => res.json())
      .then(hard007 => this.setState({hard007}));
  }

  render() {
    const {hard007} = this.state;
    return (
      <h4>Here's the solved 7th hard puzzle {hard007}</h4>
    );
  }
}

export default App;
