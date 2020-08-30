import React from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Operatorpad from './Operatorpad';

class Board extends React.Component {
  render() {
    return (
      <div style={boardStyle}>
        <Screen/>
        <div style={compositionStyle1}>
          <Numpad/>
          <Operatorpad/>
        </div>
      </div>
    );
  }
}

const compositionStyle1 = {
  display: 'flex',
  flexDirection: 'row',
}

const boardStyle = {
  width: 200,
}

export default Board;