import React from 'react';
import Button from './Button';
import {category} from './category';

class Operatorpad extends React.Component {
  generateLayout() {
    const layout = [
      <div><Button handleClick={() => this.props.handleClick('+', category.OPERATOR)} value="+"/></div>,
      <div><Button handleClick={() => this.props.handleClick('-', category.OPERATOR)} value="-"/></div>,
      <div><Button handleClick={() => this.props.handleClick('×', category.OPERATOR)} value="×"/></div>,
      <div><Button handleClick={() => this.props.handleClick('÷', category.OPERATOR)} value="÷"/></div>,
      <div><Button handleClick={() => this.props.handleClick('=', category.COMPUTE)} value="="/></div>,
    ];
    return layout;
  }

  render() {
    const layout = this.generateLayout(); 
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default Operatorpad;