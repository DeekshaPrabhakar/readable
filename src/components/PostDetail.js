import React, { Component } from 'react'
import * as ReadableUtil from '../ReadableUtil'
import deletePostIcon from '../images/deletePost.png'
import editPost from '../images/editPost.png'
import profile from '../images/profile.png'
import user from '../images/user.png'
import Comment from './Comment'
import EditComment from './EditComment'
import EditPost from './EditPost'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
import { fetchAllComments, increaseCommentVoteScore, decreaseCommentVoteScore, deleteComment, createComment, editComment } from '../actions/commentActions'
import NoMatch from './NoMatch'
import PostVote from './PostVote'

class PostDetail extends Component {

    state = {
        posts: this.props.posts,
        isEditingPost: false,
        isPostDeleted: (this.props.location.state && this.props.location.state.post) ? false : true,
        post: this.props.location.state ? this.props.location.state.post : this.props.location.state,
        comments: []
    }

    componentDidMount() {
        if (this.props.location.state && this.props.location.state.post) {
            const post = this.props.location.state.post
            this.props.getAllCommentsForPost(post.id)
        }
    }

    toggleEditPost = () => {
        this.setState({
            isEditingPost: !this.state.isEditingPost
        })
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.posts && this.props.location.state && this.props.location.state.post) {
            const postID = this.state.post.id
            let post = nextProps.posts.filter(post => post.id === postID)
            if (post.length > 0) {
                this.setState({
                    post: post[0]
                })
            }
            else {
                nextProps.history.push("/")
            }
        }

        if (nextProps.comments) {
            const comments = nextProps.comments
            if (nextProps.comments.length > 1) {
                comments.sort((a, b) => {
                    return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
                })
            }
            this.setState({
                comments: comments
            })
        }
    }

    render() {
        if (this.state.isPostDeleted) {
            return <NoMatch />
        }
        const post = this.state.post
        const comments = this.state.comments
        const { removePost } = this.props
        const { increaseCommentVote, decreaseCommentVote, removeComment, createNewComment, editExistingComment } = this.props

        return (

            <div className="postDetail">
                {this.state.isEditingPost && (
                    <EditPost onEditPost={this.props.onEditPost} redirect={false} post={post} categories={this.props.categories} isEditingPost={this.state.isEditingPost} toggleEditPost={this.toggleEditPost} />
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
                                <button className="deletePost" onClick={(e) => removePost(post.id)}>
                                    <img src={deletePostIcon} title="Delete Post" className="voteIcon" alt="delete icon" />
                                </button>
                            </span>
                        </div>
                        <p className="excerpt">
                            {post.body}
                        </p>
                        <PostVote post={post} isPostDetail={true}></PostVote>
                    </div >
                )}

                {comments.length > 0 && (
                    <div className="comments">
                        <h4>{comments.length > 1 ? comments.length + " Comments" : comments.length + " Comment"}</h4>
                        {comments.map((comment) => (
                            <div key={comment.id}>
                                <Comment increaseCommentVote={increaseCommentVote} decreaseCommentVote={decreaseCommentVote}
                                    removeComment={removeComment} editExistingComment={editExistingComment} postID={post.id} comment={comment}></Comment>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <EditComment createNewComment={createNewComment} postID={post.id}></EditComment>
                </div>
            </div >
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
        increaseCommentVote: (commentID) => dispatch(increaseCommentVoteScore(commentID)),
        decreaseCommentVote: (commentID) => dispatch(decreaseCommentVoteScore(commentID)),
        getAllCommentsForPost: (postID) => dispatch(fetchAllComments(postID)),
        removeComment: (commentID) => dispatch(deleteComment(commentID)),
        createNewComment: (comment) => dispatch(createComment(comment)),
        editExistingComment: (comment) => dispatch(editComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)