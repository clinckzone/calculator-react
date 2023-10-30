import React from 'react';
import Button from './Button';

class Numpad extends React.Component {
  generateLayout() {
    const layout = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const num = 3 * i + j + 1;
        row.push(<Button handleClick={() => this.props.handleClick(num)} value={num} />);
      }
      layout.push(<div>{row}</div>);
    }
    return layout;
  }

  render() {
    const layout = this.generateLayout();
    return <div>{layout}</div>;
  }
}

export default Numpad;
