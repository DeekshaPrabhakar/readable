import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './app/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { fetchAllPosts } from './post/postActions'
import { fetchAllCategories } from './category/categoryAction'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(fetchAllPosts())
store.dispatch(fetchAllCategories())

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))
registerServiceWorker()
