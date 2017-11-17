import * as ReadableAPI from '../ReadableAPI'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS"
export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"


/* fetch all posts */
export const fetchAllPosts = () => dispatch => (
    ReadableAPI.getAllPosts().then((posts) => dispatch(receiveAllPosts(posts)))
)

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})


/* upvote a post */
export const increasePostVoteScore = (postID) => dispatch => (
    ReadableAPI.votePost(postID, { option: "upVote" }).then((post) => dispatch(upvotePost(post)))
)

export const upvotePost = (post) => ({
    type: UPVOTE_POST,
    post
})


/* downvote a post */
export const decreasePostVoteScore = (postID) => dispatch => (
    ReadableAPI.votePost(postID, { option: "downVote" }).then((post) => dispatch(downvotePost(post)))
)

export const downvotePost = (post) => ({
    type: DOWNVOTE_POST,
    post
})



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