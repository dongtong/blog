import React from 'react';
import Header from './header';
import Footer from './footer';

import { Link } from 'react-router';

// Smart Component
// 集中管理State
// 通过props将data传递給Dumb Component
// Dumb Component 可以最大化重用
export default class Layout extends React.Component {
	// 把状态放在一个集中的地方管理，是一种好的实践
	// 可以做出好的Dumb Component(Header, Footer)
	constructor() {
		super();
		this.state = {
			name: "foo",
			title: "Welcome"
		}
	}

	navigateTo () {
		this.props.history.pushState(null, "/");
	}

	getGreeting () {
		return "React";
	}

    // .bind(this)
    // Dumb Component调用此方法时都会查找到Smart Component(this)
	changeTitle (title) {
		this.setState({title}); //ES6语法
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
		// setTimeout(() => {
		//	this.setState({
		//		title: "Welcome, Fish!"
		//	});
		//}, 2000);

		return (
			<div>
				<Header 
				    title = {this.state.title}
				    changeTitle = {this.changeTitle.bind(this)} />
				<h3>{this.state.name} say: Hello {this.getGreeting()}!</h3>
				<ul>
					{list}
				</ul>
				<div>
					<p>this.props.children</p>
					{this.props.children}
				</div>
				<div>
					<button class="btn btn-warning" onClick={this.navigateTo.bind(this)}>Home</button>
					<Link to="about" class="btn btn-primary">About</Link>
					<Link to="contact" class="btn btn-success">Contact</Link>
				</div>
				<Footer />
			</div>
		);
	}
}