import React, { Component } from 'react'
import * as ReadableUtil from '../ReadableUtil'
import * as ReadableAPI from '../ReadableAPI'

class Comment extends Component {

    increaseDecreaseCommentVote = (isIncrease, commentID) => {
        let param = isIncrease ? { option: "upVote" } : { option: "downVote" }
        ReadableAPI.voteComment(commentID, param).then(comment => {
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
                </div>
                <div className="commentScore">
                    <button onClick={(e) => this.increaseDecreaseCommentVote(true, comment.id)}>
                        <span>Upvote</span>{comment.voteScore > 0 && (
                            <span className="voteScoreLabel">{comment.voteScore}</span>
                        )}
                    </button>
                    <button onClick={(e) => this.increaseDecreaseCommentVote(false, comment.id)}>
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