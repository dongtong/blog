import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends Component {
    render() {
        const { post, index, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/photos/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo"></img>
                    </Link>

                    <CSSTransitionGroup 
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.like} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>

                </div>

                <figure>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.props.increment.bind(null, index)} className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/photos/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figure>
            </figure>
        );
    }
}