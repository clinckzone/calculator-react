import React from 'react';
import Button from './Button'

class Operatorpad extends React.Component {
  generateLayout() {
    const layout = [
      <div><Button value="+"/></div>,
      <div><Button value="-"/></div>,
      <div><Button value="×"/></div>,
      <div><Button value="÷"/></div>,
      <div><Button value="="/></div>,
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