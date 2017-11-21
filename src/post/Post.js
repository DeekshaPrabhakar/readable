import React, { Component } from 'react'
import profile from '../images/profile.png'
import user from '../images/user.png'
import comment from '../images/comment.png'
import * as ReadableUtil from '../ReadableUtil'
import PostVote from './PostVote'
import PostEditDelete from './PostEditDelete'
import { connect } from 'react-redux'
import { deletePost } from './postActions'
import { Link } from 'react-router-dom'
import EditPost from './EditPost'

class Post extends Component {

    state = {
        isEditingPost: false
    }

    toggleEditPost = () => {
        this.setState({
            isEditingPost: !this.state.isEditingPost
        })
    }

    render() {
        const post = this.props.post
        const { removePost } = this.props
        return (
            <div>
                {this.state.isEditingPost && (
                    <EditPost onEditPost={this.props.onEditPost} redirect={false} post={post} categories={this.props.categories} isEditingPost={this.state.isEditingPost} toggleEditPost={this.toggleEditPost} />
                )}

                {!this.state.isEditingPost && (
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
                        <div className="postCategory">
                            <PostVote post={post} isPostDetail={false}></PostVote>
                            <span className="postSummaryEditDelete">
                                <PostEditDelete isPostDetail={false} post={post} toggleEditPost={this.toggleEditPost}></PostEditDelete>
                            </span>
                            <span className="comment">
                                <img alt="comment icon" src={comment} />{post.commentCount}&nbsp;Comments </span>
                            <span className="category">
                                {post.category}
                            </span>
                        </div>
                    </div>
                )}
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