import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableUtil from '../ReadableUtil'
import * as ReadableAPI from '../ReadableAPI'
import deleteComment from '../images/deleteComment.png'
import editComment from '../images/editComment.png'
import EditComment from './EditComment'

class Comment extends Component {

    state = {
        isEditingComment: false
    }

    toggleEditComment = () => {
        this.setState({
            isEditingComment: !this.state.isEditingComment
        })
    }

    increaseDecreaseCommentVote = (isIncrease, commentID) => {
        let param = isIncrease ? { option: "upVote" } : { option: "downVote" }
        ReadableAPI.voteComment(commentID, param).then(comment => {
            console.log(comment)
        })
    }

    deleteComment = (commentID) => {
        ReadableAPI.deleteComment(commentID).then(comment => {
            console.log(comment)
        })
    }

    render() {
        const comment = this.props.comment
        return (
            <div>
                {this.state.isEditingComment && (
                    <EditComment isEditingComment={this.state.isEditingComment} toggleEditComment={this.toggleEditComment} comment={comment} onEditComment={this.props.onEditComment} postID={this.props.postID}></EditComment>
                )}
                {!this.state.isEditingComment && (
                    <div className="postComment">
                        <div className="postCommentBody">
                            {comment.body}
                            <span className="commentAuthor">
                                <span>&nbsp;-&nbsp;</span><address>{comment.author}</address>&nbsp;
                            <time>{ReadableUtil.formatDate(comment.timestamp)}</time>
                            </span>

                            <button title="Edit Comment" className="editComment" onClick={this.toggleEditComment} >
                                <img src={editComment} alt="edit icon" />Edit
                    </button>
                            <button title="Delete Comment" onClick={(e) => this.deleteComment(comment.id)} className="deleteComment">
                                <img src={deleteComment} alt="delete icon" />Delete
                    </button>
                        </div>
                        <div className="commentScore">
                            <button title="Upvote Comment" onClick={(e) => this.increaseDecreaseCommentVote(true, comment.id)}>
                                <span>Upvote</span>{comment.voteScore > 0 && (
                                    <span className="voteScoreLabel">{comment.voteScore}</span>
                                )}
                            </button>
                            <button title="Downvote Comment" onClick={(e) => this.increaseDecreaseCommentVote(false, comment.id)}>
                                <span>Downvote</span>{comment.voteScore < 0 && (
                                    <span className="voteScoreLabel">{comment.voteScore}</span>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Comment