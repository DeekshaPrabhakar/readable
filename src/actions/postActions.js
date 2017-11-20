import * as ReadableAPI from '../ReadableAPI'
import { RECEIVE_ALL_POSTS, UPVOTE_POST, DOWNVOTE_POST } from './types'
import { CREATE_POST, EDIT_POST, DELETE_POST, UPDATE_POST_REDIRECT } from './types'

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
export const updateRedirectPost = () => dispatch => (
    dispatch(updatePostRedirect())
)

export const updatePostRedirect = () => ({
    type: UPDATE_POST_REDIRECT
})




