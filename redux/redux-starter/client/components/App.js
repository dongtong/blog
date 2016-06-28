import React, { Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	render() {
		//{this.props.children}
		// compares to =>
		//{React.cloneElement(this.props.children, this.props)}
		return (
			<div>
				<h1>
					<Link to="/">图片库</Link>
				</h1>
				{this.props.children}
			</div>
		)
	}
}