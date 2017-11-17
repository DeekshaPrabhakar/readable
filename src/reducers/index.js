import { RECEIVE_ALL_POSTS } from '../actions/postActions'
import { RECEIVE_ALL_CATEGORIES } from '../actions/categoryAction'


function content(state = { posts: [] }, action) {
    const { posts, categories } = action

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, { posts: posts })
        case RECEIVE_ALL_CATEGORIES:
            return Object.assign({}, state, { categories: categories })
        default:
            return state
    }
}

export default content