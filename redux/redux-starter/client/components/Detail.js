import React, { Component} from 'react';
import Photo from './Photo';
import Comments from './comments';

export default class Detail extends Component {
	render() {
        // deconstructor
        const { photoId } = this.props.params;
        const index = this.props.posts.findIndex((post) => post.code === photoId);
        const post = this.props.posts[index];
        const postComments = this.props.comments[photoId] || [];

		return (
			<div className="single-photo">
				<Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
}