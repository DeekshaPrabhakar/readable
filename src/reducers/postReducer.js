import { RECEIVE_ALL_POSTS, UPVOTE_POST, DOWNVOTE_POST } from '../actions/types'
import { CREATE_POST, EDIT_POST, DELETE_POST, UPDATE_POST_REDIRECT } from '../actions/types'

function postReducer(state = { posts: [], redirect: false }, action) {
    const { posts } = action
    let updatedPosts = []
    let newState = {}

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            posts.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            newState = {
                ...state,
                posts: posts,
                redirect: false
            }
            return newState
        case UPVOTE_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            updatedPosts.push(action.post)
            newState = {
                ...state,
                redirect: false,
                posts: updatedPosts
            }
            return newState
        case DOWNVOTE_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            updatedPosts.push(action.post)
            newState = {
                ...state,
                redirect: false,
                posts: updatedPosts
            }
            return newState
        case DELETE_POST:
            updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            newState = {
                ...state,
                redirect: false,
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
        case UPDATE_POST_REDIRECT:
            newState = {
                ...state,
                redirect: false
            }
            return newState
        default:
            return state
    }
}

export default postReducer