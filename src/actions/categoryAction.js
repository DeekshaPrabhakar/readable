import * as ReadableAPI from '../ReadableAPI'

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES"

export const receiveAllCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
})

export const fetchAllCategories = () => dispatch => (
    ReadableAPI.getCategories().then((categories) => dispatch(receiveAllCategories(categories)))
);