import * as ReadableAPI from '../ReadableAPI'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const fetchAllPosts = () => dispatch => (
    ReadableAPI.getAllPosts().then((posts) => dispatch(receiveAllPosts(posts)))
);