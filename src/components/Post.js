import React, { Component } from 'react'
import profile from '../images/profile.png'
import user from '../images/user.png'
import * as ReadableUtil from '../ReadableUtil'
import PostVote from './PostVote'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
import { Link } from 'react-router-dom'

class Post extends Component {

    render() {
        const post = this.props.post
        const { removePost } = this.props
        return (
            <div>
                <Link to={{
                    pathname: '/posts/' + post.id.split('-').join(''),
                    state: { post: post }
                }}>
                    <p className="postTitle">
                        {post.title}
                    </p>
                    <div className="postInfo">
                        <span className="profileImage">
                            <img alt="profile icon" src={post.author === "Deeksha Prabhakar" ? profile : user} />
                        </span>
                        <span className="author">
                            <address>{post.author}</address>
                            <time>{ReadableUtil.formatDate(post.timestamp)}</time>
                        </span>
                    </div>
                    <p className="excerpt">
                        {post.body}
                    </p>
                </Link>
                <PostVote post={post} isPostDetail={false}></PostVote>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const posts = state.postReducer.posts
    const comments = state.commentReducer.comments
    return { posts: posts, comments: comments };
}

function mapDispatchToProps(dispatch) {
    return {
        removePost: (postID) => dispatch(deletePost(postID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)