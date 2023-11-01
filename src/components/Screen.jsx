import React from 'react';

class Screen extends React.Component {
	render() {
		return <div style={screenStyle}>{this.props.value}</div>;
	}
}

const screenStyle = {
	boxSizing: 'border-box',
	width: '100%',
	height: '100%',
	border: '2px solid black',
	textAlign: 'right',
	background: 'black',
	color: 'white',
	fontSize: '36px',
	fontWeight: 700,
};

export default Screen;
