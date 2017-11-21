import React, { Component } from 'react'
import { connect } from 'react-redux'
import deletePostIcon from '../images/deletePost.png'
import deletePostSummary from '../images/deletePostSummary.png'
import editPost from '../images/editPost.png'
import editPostSummary from '../images/editPostSummary.png'
import { deletePost } from '../actions/postActions'

class PostEditDelete extends Component {
    render() {
        const post = this.props.post
        const isPostDetail = this.props.isPostDetail
        const { removePost } = this.props

        return (
            <span>
                {isPostDetail && (
                    <span>
                        <button className="editPost" onClick={(e) => this.props.toggleEditPost()}>
                            <img src={editPost} title="Edit Post" className="voteIcon" alt="edit icon" />
                        </button>
                        <button className="deletePost" onClick={(e) => removePost(post.id)}>
                            <img src={deletePostIcon} title="Delete Post" className="voteIcon" alt="delete icon" />
                        </button>
                    </span>
                )}

                {!isPostDetail && (
                    <span>
                        <button className="editPost" onClick={(e) => this.props.toggleEditPost()}>
                            <img src={isPostDetail ? editPost : editPostSummary} title="Edit Post" className="voteIcon" alt="edit icon" />
                            <span>Edit Post</span>
                        </button>
                        <button className="deletePost" onClick={(e) => removePost(post.id)}>
                            <img src={isPostDetail ? deletePostIcon : deletePostSummary} title="Delete Post" className="voteIcon" alt="delete icon" />
                            <span>Delete Post</span>
                        </button>
                    </span>
                )}

            </span>
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
        removePost: (postID) => dispatch(deletePost(postID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditDelete)