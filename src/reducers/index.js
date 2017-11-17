import { RECEIVE_ALL_CATEGORIES } from '../actions/categoryAction'
import { RECEIVE_ALL_POSTS, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST, CREATE_POST, EDIT_POST } from '../actions/postActions'
import { RECEIVE_ALL_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT, DELETE_COMMENT } from '../actions/postActions'

function content(state = { posts: [] }, action) {
    const { posts, categories, comments } = action
    let updatedPosts = []
    let updatedComments = []
    let newState = {}

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, { posts: posts, redirect: false })
        case RECEIVE_ALL_CATEGORIES:
            return Object.assign({}, state, { categories: categories, redirect: false })
        case UPVOTE_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            updatedPosts.push(action.post)
            newState = {
                ...state,
                posts: updatedPosts
            }
            return newState
        case DOWNVOTE_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            updatedPosts.push(action.post)
            newState = {
                ...state,
                posts: updatedPosts
            }
            return newState
        case DELETE_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            newState = {
                ...state,
                posts: updatedPosts
            }
            return newState
        case CREATE_POST:
            updatedPosts = state.posts
            updatedPosts.push(action.post)
            newState = {
                ...state,
                posts: updatedPosts,
                redirect: true
            }
            return newState
        case EDIT_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            updatedPosts.push(action.post)
            newState = {
                ...state,
                posts: updatedPosts,
                redirect: false
            }
            return newState
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, state, { comments: comments, redirect: false })
        case UPVOTE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.push(action.comment)
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        case DOWNVOTE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.push(action.comment)
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        case DELETE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        default:
            return state
    }
}

export default content