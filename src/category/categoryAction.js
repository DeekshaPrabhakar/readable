import * as ReadableAPI from '../ReadableAPI'
import { RECEIVE_ALL_CATEGORIES } from '../app/actionTypes'

export const receiveAllCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
})

export const fetchAllCategories = () => dispatch => (
    ReadableAPI.getCategories().then((categories) => dispatch(receiveAllCategories(categories)))
);