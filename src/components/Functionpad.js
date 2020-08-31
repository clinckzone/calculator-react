import React from 'react';
import Button from './Button';

class Functionpad extends React.Component {
  generateLayout() {
    const layout = [
      <Button handleClick={() => this.props.handleClick('AC')} value="AC"/>,
      <Button handleClick={() => this.props.handleClick(0)} value="0"/>,
      <Button handleClick={() => this.props.handleClick('.')} value="."/>,
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