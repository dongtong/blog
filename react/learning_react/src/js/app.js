import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
	constructor() {
		super();
		this.name = "foobar";
	}

	getGreeting () {
		return "React";
	}

	render() {
		return (
			<h1>{this.name} say: Hello {this.getGreeting()}!</h1>
		);
	}
}

ReactDOM.render(<Layout />, document.getElementById('container'));