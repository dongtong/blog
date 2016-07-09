import React, { Component} from 'react';
import Photo from './Photo';
import Comments from './comments';

export default class Detail extends Component {
	render() {
        const index = this.props.posts.findIndex((post) => post.code === this.props.params.photoId);
        const post = this.props.posts[index];

		return (
			<div>
				<Photo index={index} post={post} {...this.props} />
                <Comments />
			</div>
		)
	}
}