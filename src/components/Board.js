import React from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Operatorpad from './Operatorpad';
import Functionpad from './Functionpad';

class Board extends React.Component {
  render() {
    return (
      <div style={boardStyle}>
        <Screen/>
        <div style={compositionStyle1}>
          <div style={compositionStyle2}>
            <Numpad/>
            <Functionpad/>
          </div>
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


const compositionStyle2 = {
  display: 'flex',
  flexDirection: 'column',
}

const boardStyle = {
  width: 200,
}

export default Board;