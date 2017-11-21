import { RECEIVE_ALL_CATEGORIES } from '../app/actionTypes'

function categoryReducer(state = { categories: [] }, action) {
    const { categories } = action
    let newState = {}

    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            newState = {
                ...state,
                "categories": categories
            }
            return newState
        default:
            return state
    }
}

export default categoryReducer