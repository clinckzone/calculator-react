import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
			isPressed: false,
		};
	}

	render() {
		return (
			<button
				onMouseDown={() => this.setState({ isPressed: true })}
				onMouseUp={() => this.setState({ isPressed: false })}
				onMouseEnter={() => this.setState({ isHovering: true })}
				onMouseLeave={() => this.setState({ isHovering: false })}
				onClick={this.props.handleClick}
				style={buttonStyle(this.state)}
			>
				{this.props.value}
			</button>
		);
	}
}

const buttonStyle = (state) => ({
	width: 100,
	height: 100,
	transition: 'background 0.3s',
	background: state.isPressed ? 'gray' : state.isHovering ? 'black' : 'white',
	color: state.isHovering ? 'white' : 'black',
	border: '2px solid black',
	fontWeight: 'bold',
	fontSize: '36px',
});

export default Button;
