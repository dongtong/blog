import React from 'react';

export default class About extends React.Component {
	render () {
		// 在控制台中查看
		console.log(this.props)
		const { query }  = this.props.location;
		return (
			<div>
				<h2>About</h2>
			</div>
		);
	}
}