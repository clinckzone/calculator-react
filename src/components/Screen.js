import React from 'react';

class Screen extends React.Component {
  render() {
    return (
      <div style={screenStyle}>
        0123456789
      </div>
    );
  }
}

const  screenStyle = {
  width: '100%',
  height: 50,
  border: '2px solid black',
}

export default Screen;