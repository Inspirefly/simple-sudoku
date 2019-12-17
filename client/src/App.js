import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Board from './components/Board';

function App(props) {
  return (
    <Provider store={store}>
      <div className="app">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
