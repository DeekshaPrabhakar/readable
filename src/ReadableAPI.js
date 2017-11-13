const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

//get all categories
export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)


//get all posts
export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

//get a single post by id
export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())


//get all comments of a post by id
export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())

//create a new post
export const createPost = (body) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

//edit a post
export const editPost = (postId, body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

//delete a post
export const deletePost = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())


//upvote or downvote a post
export const votePost = (postId, body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())


