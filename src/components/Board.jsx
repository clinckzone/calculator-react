import React from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Operatorpad from './Operatorpad';
import Functionpad from './Functionpad';
import { computeResult } from '../expression-interpreter';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if (value !== '=') {
      if (value === 'AC') {
        this.setState({
          display: '',
        });
      } else {
        this.setState((state) => {
          const d = state.display + value.toString();
          return {
            display: d,
          };
        });
      }
    } else {
      this.setState({
        display: computeResult(this.state.display),
      });
    }
  }

  render() {
    return (
      <div style={boardStyle}>
        <Screen value={this.state.display} />
        <div style={compositionStyle1}>
          <div style={compositionStyle2}>
            <Numpad handleClick={this.handleClick} />
            <Functionpad handleClick={this.handleClick} />
          </div>
          <Operatorpad handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

const compositionStyle1 = {
  display: 'flex',
  flexDirection: 'row',
};

const compositionStyle2 = {
  display: 'flex',
  flexDirection: 'column',
};

const boardStyle = {
  width: 200,
};

export default Board;
