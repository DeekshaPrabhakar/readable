import React, { Component } from 'react'
import profile from '../images/profile.png'
import user from '../images/user.png'
import comment from '../images/comment.png'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import * as ReadableUtil from '../ReadableUtil'

class Comment extends Component {
    render() {
        const comment = this.props.comment
        return (
            <div key={comment.id} className="postComment">
                <p className="postCommentBody">
                    {comment.body}
                    <span className="commentAuthor">
                        <span>&nbsp;-&nbsp;</span><address>{comment.author}</address>&nbsp;
                            <time>{ReadableUtil.formatDate(comment.timestamp)}</time>
                    </span>
                </p>
                <div className="commentScore">
                    <button onClick={(e) => this.increaseDecreaseVote(true, comment.id)}>
                        <span>Upvote</span>{comment.voteScore > 0 && (
                            <span className="voteScoreLabel">{comment.voteScore}</span>
                        )}
                    </button>
                    <button onClick={(e) => this.increaseDecreaseVote(false, comment.id)}>
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