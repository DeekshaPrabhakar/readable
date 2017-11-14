import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableUtil from '../ReadableUtil'
import * as ReadableAPI from '../ReadableAPI'
import deleteComment from '../images/deleteComment.png'
import editComment from '../images/editComment.png'

class Comment extends Component {

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
            <div className="postComment">
                <div className="postCommentBody">
                    {comment.body}
                    <span className="commentAuthor">
                        <span>&nbsp;-&nbsp;</span><address>{comment.author}</address>&nbsp;
                            <time>{ReadableUtil.formatDate(comment.timestamp)}</time>
                    </span>
                    <Link to={{
                            pathname: '/editComment',
                            state: { comment: comment }
                        }}>
                    <button title="Edit Comment" className="editComment" >
                        <img src={editComment} alt="edit icon"/>Edit
                    </button>
                    </Link>
                    <button title="Delete Comment" onClick={(e) => this.deleteComment(comment.id)} className="deleteComment">
                        <img src={deleteComment} alt="delete icon"/>Delete
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
        )
    }
}

export default Comment