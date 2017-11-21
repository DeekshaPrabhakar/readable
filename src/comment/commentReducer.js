import { RECEIVE_ALL_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../app/actionTypes'
import { DELETE_COMMENT, CREATE_COMMENT, EDIT_COMMENT } from '../app/actionTypes'

function commentReducer(state = { comments: [] }, action) {
    const { comments } = action
    let updatedComments = []
    let newState = {}

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            comments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            return Object.assign({}, state, { comments: comments })
        case UPVOTE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.push(action.comment)
            updatedComments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        case DOWNVOTE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.push(action.comment)
            updatedComments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        case DELETE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        case CREATE_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.push(action.comment)
            updatedComments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        case EDIT_COMMENT:
            updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
            updatedComments.push(action.comment)
            updatedComments.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            newState = {
                ...state,
                comments: updatedComments
            }
            return newState
        default:
            return state
    }
}

export default commentReducer