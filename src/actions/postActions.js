import * as ReadableAPI from '../ReadableAPI'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

/* fetch all posts */
export const fetchAllPosts = () => dispatch => (
    ReadableAPI.getAllPosts().then((posts) => dispatch(receiveAllPosts(posts)))
);

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})


/*upvote a post */
export const increasePostVoteScore = (postID) => dispatch => (
    ReadableAPI.votePost(postID, { option: "upVote" } ).then((post) => dispatch(upvotePost(post)))
);

export const upvotePost = (post) => ({
    type: UPVOTE_POST,
    post
})


/*downvote a post */
export const decreasePostVoteScore = (postID) => dispatch => (
    ReadableAPI.votePost(postID, { option: "downVote" } ).then((post) => dispatch(downvotePost(post)))
);

export const downvotePost = (post) => ({
    type: DOWNVOTE_POST,
    post
})