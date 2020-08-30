import React from 'react';
import Button from './Button';

class Functionpad extends React.Component {
  generateLayout() {
    const layout = [
      <Button value="AC"/>,
      <Button value="0"/>,
      <Button value="."/>,
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

export default Functionpad;