import React from 'react';
import Board from './components/Board';

class App extends React.Component {
	render() {
		return (
			<div style={appStyle}>
				<h1 style={{ fontSize: '64px' }}>Calculator</h1>
				<Board />
			</div>
		);
	}
}

const appStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontFamily: 'Arial',
	fontSize: 20,
};

export default App;
