import { RECEIVE_ALL_CATEGORIES } from '../actions/categoryAction'
import { RECEIVE_ALL_POSTS, UPVOTE_POST, DOWNVOTE_POST } from '../actions/postActions'


function content(state = { posts: [] }, action) {
    const { posts, categories } = action

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, { posts: posts })
        case RECEIVE_ALL_CATEGORIES:
            return Object.assign({}, state, { categories: categories })
        case UPVOTE_POST:
            let updatedPosts = state.posts.filter(post => post.id !== action.post.id)
            updatedPosts.push(action.post)
            let newState = {
                ...state,
                posts: updatedPosts
            }
            return newState
        case DOWNVOTE_POST:
            return state
        default:
            return state
    }
}

export default content