import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ReadableAPI from '../ReadableAPI';

class PostDetail extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        const post = this.props.location.state.post
        ReadableAPI.getPostComments(post.id).then(comments => {
            this.setState({
                comments: comments
            })
        });
    }

    render() {
        const post = this.props.location.state.post
        console.log(post)
        const comments = this.state.comments

        return (
            <div className="postDetail">
                <h3 className="postTitle">
                    {post.title}
                </h3>
                <p className="postBody">
                    {post.body}
                </p>
                {comments.length > 0 && (
                    <div className="comments">
                        <h4>Comments</h4>
                        <ul>
                            {comments.map((comment) => (
                                <li key={comment.id} className="comment">
                                    <p className="commentBody">
                                        {comment.body}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default PostDetail;