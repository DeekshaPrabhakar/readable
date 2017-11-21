import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increasePostVoteScore, decreasePostVoteScore } from './postActions'
import like from '../images/like.png'
import dislike from '../images/dislike.png'

class PostVote extends Component {
    render() {
        const post = this.props.post
        const { increasePostVote, decreasePostVote } = this.props
        const isPostDetail = this.props.isPostDetail

        return (
            <span>

                {isPostDetail && (
                    <span className="voteScoreDetail">
                        <button title="Upvote Post" onClick={() => increasePostVote(post.id)}>
                            <span>Upvote</span>{post.voteScore > 0 && (
                                <span className="voteScoreLabel">{post.voteScore}</span>
                            )}
                        </button>
                        <button title="Downvote Post" onClick={() => decreasePostVote(post.id)}>
                            <span>Downvote</span>{post.voteScore < 0 && (
                                <span className="voteScoreLabel">{post.voteScore}</span>
                            )}
                        </button>
                    </span>
                )}

                {!isPostDetail && (
                    <span className="voteScore">
                        <button title="Upvote Post" onClick={() => increasePostVote(post.id)}>
                            <img alt="like icon" src={like} />
                            <span className="voteScoreLabel">{post.voteScore > 0 ? post.voteScore : 0}</span>
                        </button>
                        <button title="Downvote Post" onClick={() => decreasePostVote(post.id)}>
                            <img alt="like icon" className="dislike" src={dislike} />
                            <span className="voteScoreLabel">{post.voteScore < 0 ? post.voteScore : 0}</span>
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
        increasePostVote: (postID) => dispatch(increasePostVoteScore(postID)),
        decreasePostVote: (postID) => dispatch(decreasePostVoteScore(postID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostVote)