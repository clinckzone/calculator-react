import React from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Operatorpad from './Operatorpad';
import Functionpad from './Functionpad';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if(value == 'AC') {
      this.setState({
        value: '',
      })
    }
    else {
      this.setState(
        (state) => ({
          value: state.value + value.toString(),
        })
      );
    }
  }

  render() {
    return (
      <div style={boardStyle}>
        <Screen value={this.state.value} />
        <div style={compositionStyle1}>
          <div style={compositionStyle2}>
            <Numpad handleClick={this.handleClick} />
            <Functionpad handleClick={this.handleClick} />
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