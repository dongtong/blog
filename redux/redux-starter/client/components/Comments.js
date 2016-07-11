import React, { Component } from 'react';

export default class Comment extends Component {

    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>:
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    }

    handleSubmit(e) {
        // 防止提交刷新
        e.preventDefault(); 
        const { photoId } = this.props.params;
        // 引用DOM对象
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(photoId, author, comment);
    }

    render() {
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment content..." />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}