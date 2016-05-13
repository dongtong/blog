import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "foo",
			title: "Welcome"
		}
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

		// 仅仅是h3 dom刷新
		// 刷新状态改变最近的一个DOM
		// 打开chrome Console > Rendering > Enable paint flashing
		setTimeout(() => {
			this.setState({
				title: "Welcome, Fish!"
			});
		}, 2000);

		return (
			<div>
				<Header title={this.state.title}/>
				<h3>{this.state.name} say: Hello {this.getGreeting()}!</h3>
				<ul>
					{list}
				</ul>
				<Footer />
			</div>
		);
	}
}