import React, { Component } from 'react'
import profile from '../images/profile.png'
import user from '../images/user.png'
import comment from '../images/comment.png'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import * as ReadableUtil from '../ReadableUtil'
class Post extends Component {
    render() {
        const post = this.props.post
        return (
            <div>
                <p className="postTitle">
                    {post.title}
                </p>
                <div className="postInfo">
                    <span className="profileImage">
                        <img src={post.author === "Deeksha Prabhakar" ? profile : user} />
                    </span>
                    <span className="author">
                        <address>{post.author}</address>
                        <time>{ReadableUtil.formatDate(post.timestamp)}</time>
                    </span>
                </div>
                <p className="excerpt">
                    {post.body}
                </p>
                <div className="postCategory">
                    <span className="comment">
                        <img src={comment} />{post.commentCount}&nbsp;Comments </span>
                    <span className="voteScore"><img className={post.voteScore < 0 ? "dislike" : ""} src={post.voteScore > 0 ? like : dislike} />{post.voteScore}&nbsp;Votes</span>
                    <span className="category">
                        {post.category}
                    </span>
                </div>
            </div>
        )
    }
}

export default Post