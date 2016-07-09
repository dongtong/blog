import React, { Component} from 'react';
import Photo from './Photo';

export default class PhotoGrid extends Component {
	render() {
		return (
			<div>
				<div className="photo-grid">
                    {this.props.posts.map((post, index) => <Photo {...this.props} key={"photo-" + index} index={index} post={post}/>)}
                </div>
			</div>
		)
	}
}