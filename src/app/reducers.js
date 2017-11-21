import { combineReducers } from 'redux'
import categoryReducer from '../category/categoryReducer'
import postReducer from '../post/postReducer'
import commentReducer from '../comment/commentReducer'

export default combineReducers({
    categoryReducer,
    postReducer,
    commentReducer
})
