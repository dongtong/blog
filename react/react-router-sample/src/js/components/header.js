import React from 'react';
import Title from './header/title';

// Dumb Component
// 可以重用
// 不关心状态，只关心Props
export default class Header extends React.Component {
	// synthetic event
	handleChange (e) {
		const value = e.target.value;
		this.props.changeTitle(value);
	}

	// 双向绑定（value={}）
	render () {
		return (
			<div>
				<Title title={this.props.title} />
				<input value={this.props.title} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}