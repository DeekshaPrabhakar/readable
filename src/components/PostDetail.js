import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableAPI from '../ReadableAPI'
import * as ReadableUtil from '../ReadableUtil'
import deletePost from '../images/deletePost.png'
import editPost from '../images/editPost.png'
import profile from '../images/profile.png'
import user from '../images/user.png'
import Comment from './Comment'
import EditComment from './EditComment'
import EditPost from './EditPost'

class PostDetail extends Component {

    state = {
        isEditingPost: false,
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

    toggleEditPost = () => {
        this.setState({
            isEditingPost: !this.state.isEditingPost
        })
    }

    render() {
        const post = this.props.location.state.post
        const comments = this.state.comments

        return (
            <div className="postDetail">
                {this.state.isEditingPost && (
                    <EditPost onEditPost={this.props.onEditPost} post={post} categories={this.props.categories} isEditingPost={this.state.isEditingPost} toggleEditPost={this.toggleEditPost} />
                )}

                {!this.state.isEditingPost && (
                    <div>
                        <h3 className="postTitle">
                            {post.title}
                        </h3>
                        <div className="postInfo">
                            <span className="profileAuthor">
                                <span className="profileImage">
                                    <img alt="profile icon" src={post.author === "Deeksha Prabhakar" ? profile : user} />
                                </span>
                                <span className="author">
                                    <address>{post.author}</address>
                                    <time>{ReadableUtil.formatDate(post.timestamp)}</time>
                                </span>
                            </span>
                            <span className="postEditControls">
                                <button className="editPost" onClick={(e) => this.toggleEditPost()}>
                                    <img src={editPost} title="Edit Post" className="voteIcon" alt="edit icon" />
                                </button>
                                <button className="deletePost" onClick={(e) => this.deletePost(post.id)}>
                                    <img src={deletePost} title="Delete Post" className="voteIcon" alt="delete icon" />
                                </button>
                            </span>
                        </div>
                        <p className="excerpt">
                            {post.body}
                        </p>
                        <div className="postCategory">
                            <span className="voteScoreDetail">
                                <button title="Upvote Post" onClick={(e) => this.increaseDecreaseVote(true, post.id)}>
                                    <span>Upvote</span>{post.voteScore > 0 && (
                                        <span className="voteScoreLabel">{post.voteScore}</span>
                                    )}
                                </button>
                                <button title="Downvote Post" onClick={(e) => this.increaseDecreaseVote(false, post.id)}>
                                    <span>Downvote</span>{post.voteScore < 0 && (
                                        <span className="voteScoreLabel">{post.voteScore}</span>
                                    )}
                                </button>
                            </span>
                            <span className="category">
                                {post.category}
                            </span>
                        </div>
                    </div >
                )}

                {comments.length > 0 && (
                    <div className="comments">
                        <h4>{comments.length > 1 ? comments.length + " Comments" : comments.length + " Comment"}</h4>
                        {comments.map((comment) => (
                            <div key={comment.id}>
                                <Comment onEditComment={this.props.onEditComment} postID={post.id} comment={comment}></Comment>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <EditComment onEditComment={this.props.onEditComment} postID={post.id}></EditComment>
                </div>
            </div >
        )
    }
}

export default PostDetail;