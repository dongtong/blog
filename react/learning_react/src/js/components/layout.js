import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "foobar";
	}

	getGreeting () {
		return "React";
	}

	render() {
		// 自动解构
		let list = [
			<li>list 1</li>,
			<li>list 2</li>,
			<li>list 3</li>
		];

		return (
			<div>
				<Header />
				<h3>{this.name} say: Hello {this.getGreeting()}!</h3>
				<ul>
					{list}
				</ul>
				<Footer />
			</div>
		);
	}
}