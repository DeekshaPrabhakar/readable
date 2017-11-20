import * as ReadableAPI from '../ReadableAPI'
import { RECEIVE_ALL_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from './types'
import { DELETE_COMMENT, CREATE_COMMENT, EDIT_COMMENT } from './types'

/* fetch all comments */
export const fetchAllComments = (postID) => dispatch => (
    ReadableAPI.getPostComments(postID).then((comments) => dispatch(receiveAllComments(comments)))
)

export const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})


/* upvote a comment */
export const increaseCommentVoteScore = (commentID) => dispatch => (
    ReadableAPI.voteComment(commentID, { option: "upVote" }).then((comment) => dispatch(upvoteComment(comment)))
)

export const upvoteComment = (comment) => ({
    type: UPVOTE_COMMENT,
    comment
})


/* downvote a comment */
export const decreaseCommentVoteScore = (commentID) => dispatch => (
    ReadableAPI.voteComment(commentID, { option: "downVote" }).then((comment) => dispatch(downvoteComment(comment)))
)

export const downvoteComment = (comment) => ({
    type: DOWNVOTE_COMMENT,
    comment
})


/* delete a comment */
export const deleteComment = (commentID) => dispatch => (
    ReadableAPI.deleteComment(commentID).then((comment) => dispatch(removeComment(comment)))
)

export const removeComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})


/* create a comment */
export const createComment = (comment) => dispatch => (
    ReadableAPI.createComment(comment).then((comment) => dispatch(addComment(comment)))
)

export const addComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})


/* edit a comment */
export const editComment = (comment) => dispatch => (
    ReadableAPI.editComment(comment.id, comment).then((comment) => dispatch(updateComment(comment)))
)

export const updateComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})