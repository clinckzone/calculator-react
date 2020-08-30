import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button style={buttonStyle}>
        {this.props.value}
      </button>
    );
  }
}

const buttonStyle = {
  width: 50,
  height: 50,
  background: 'white',
  border: '2px solid black',
  fontSize: 'inherit',
}

export default Button;

