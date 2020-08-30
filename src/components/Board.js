import React from 'react';
import Screen from './Screen';
import Numpad from './Numpad';

class Board extends React.Component {
  render() {
    return (
      <div style={boardStyle}>
        <Screen/>
        <Numpad/>
      </div>
    );
  }
}

const boardStyle = {
  width: 200,
}

export default Board;