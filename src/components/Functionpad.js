import React from 'react';
import Button from './Button';
import { category } from './category';

class Functionpad extends React.Component {
  generateLayout() {
    const layout = [
      <Button handleClick={() => this.props.handleClick('AC', category.CLEAR)} value="AC"/>,
      <Button handleClick={() => this.props.handleClick(0, category.NUMBER)} value="0"/>,
      <Button handleClick={() => this.props.handleClick('.', category.NUMBER)} value="."/>,
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