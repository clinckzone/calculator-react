import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div style={appStyle}>
      <h1>Calculator</h1>
      <Board/>
    </div>
  );
}

const appStyle = {
  fontFamily: 'Arial',
  fontSize: 20,
}

export default App;