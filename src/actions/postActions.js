import * as ReadableAPI from '../ReadableAPI'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"
export const DELETE_POST = "DELETE_POST"
export const CREATE_POST = "CREATE_POST"
export const EDIT_POST = "EDIT_POST"
export const UPDATE_POST_REDIRECT = "UPDATE_POST_REDIRECT"

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS"
export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"


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

/* create a post */
export const createPost = (post) => dispatch => (
    ReadableAPI.createPost(post).then((post) => dispatch(addPost(post)))
)

export const addPost = (post) => ({
    type: CREATE_POST,
    post
})


/* edit a post */
export const editPost = (post) => dispatch => (
    ReadableAPI.editPost(post.id, post).then((post) => dispatch(updatePost(post)))
)

export const updatePost = (post) => ({
    type: EDIT_POST,
    post
})


/* delete a post */
export const deletePost = (postID) => dispatch => (
    ReadableAPI.deletePost(postID).then((post) => dispatch(removePost(post)))
)

export const removePost = (post) => ({
    type: DELETE_POST,
    post
})


/* update post redirect */
export const updateRedirectPost = (isRedirect) => dispatch => (
    dispatch(updatePostRedirect(isRedirect))
)

export const updatePostRedirect = (isRedirectpost) => ({
    type: UPDATE_POST_REDIRECT,
    isRedirectpost
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