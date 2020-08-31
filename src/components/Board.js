import React from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Operatorpad from './Operatorpad';
import Functionpad from './Functionpad';
import {category} from './category';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      display: '',
      operator: '',
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  computeResult() {
    const operator = this.state.operator;
    const value1 = parseFloat(this.state.value1);
    const value2 = parseFloat(this.state.value2);

    let result;
    switch(operator) {
      case '+':
        result = value1 + value2; 
        break;
      case '-':
        result = value1 - value2;
        break;
      case '×':
        result = value1 * value2;
        break;
      case '÷':
        result = value1 / value2;
        break;
      default:
        break; 
    }
    console.log(result);
    return result;
  }

  handleClick(value, type) {
    if(type === category.CLEAR) {
      this.setState({
        value1: '',
        value2: '',
        display: '',
        operator: '',
        result: '',
      });
    }
    else if(type === category.NUMBER) {
      if(this.state.operator === '') {
        this.setState(
          (state) => {
            const v = state.value1 + value.toString();
            return {
              value1: v,
              display: v,
            };
          }
        );
      }
      else {
        this.setState(
          (state) => {
            const v = state.value2 + value.toString();
            return {
              value2: v,
              display: v,
            };
          }
        );
      }
    }
    else if(type === category.OPERATOR) {
      this.setState({
        operator: value,
        display: '',
      });
    }
    else if(type === category.COMPUTE) {
      this.setState(
        (state) => {
          const r = this.computeResult();
          return {
            value1: r,
            value2: '',
            display: r,
            operator: '',
            result: r,
          };
        }
      );
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
          <Operatorpad handleClick={this.handleClick}/>
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