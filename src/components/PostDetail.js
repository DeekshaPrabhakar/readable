import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableAPI from '../ReadableAPI'
import * as ReadableUtil from '../ReadableUtil'
import voteUp from '../images/voteUp.png'
import voteDown from '../images/voteDown.png'
import deletePost from '../images/deletePost.png'
import editPost from '../images/editPost.png'

class PostDetail extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        const post = this.props.location.state.post
        ReadableAPI.getPostComments(post.id).then(comments => {
            comments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            this.setState({
                comments: comments
            })
        });
    }

    increaseDecreaseVote = (isIncrease, postID) => {
        let param = isIncrease ? { option: "upVote" } : { option: "downVote" }
        ReadableAPI.votePost(postID, param).then(post => {
            console.log(post)
        })
    }

    deletePost = (postID) => {
        ReadableAPI.deletePost(postID).then(post => {
            console.log(post)
        })
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
                <p className="excerpt">
                    {post.body}
                </p>
                <Link to={{
                    pathname: '/edit',
                    state: { post: post }
                }}>
                    <img src={editPost} className="voteIcon" alt="edit icon" />
                </Link>
                <button onClick={(e) => this.deletePost(post.id)}>
                    <img src={deletePost} className="voteIcon" alt="delete icon" />
                </button>
                <div>
                    <button onClick={(e) => this.increaseDecreaseVote(true, post.id)}>
                        <img src={voteUp} className="voteIcon" alt="vote up icon" />
                    </button>
                    <p>{post.voteScore}</p>
                    <button onClick={(e) => this.increaseDecreaseVote(false, post.id)}>
                        <img src={voteDown} className="voteIcon" alt="vote down icon" />
                    </button>
                </div>
                <div>
                    <span className="postInfo">
                        <address>{post.author}</address>
                        <time>{ReadableUtil.formatDate(post.timestamp)}</time>
                    </span>
                    <span className="postCategory">
                        {post.category}
                    </span>
                </div>
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