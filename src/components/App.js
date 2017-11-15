import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../images/logo64.png'
import pencil from '../images/pencil.png'
import '../App.css'
import * as ReadableAPI from '../ReadableAPI'
import Home from './Home'
import PostDetail from './PostDetail'
import EditPost from './EditPost'
import EditComment from './EditComment'
import NoMatch from './NoMatch'

class App extends Component {

    state = {
        categories: [],
        posts: []
    }

    editPost(post, isEdit) {
        if (isEdit) {
            ReadableAPI.editPost(post.id, post).then(post => {
                console.log(post)
            })
        } else {
            ReadableAPI.createPost(post).then(post => {
                console.log(post)
            })
        }
    }

    editComment(comment, isEdit) {
        if (isEdit) {
            ReadableAPI.editComment(comment.id, comment).then(comment => {
                console.log(comment)
            })
        } else {
            ReadableAPI.createComment(comment).then(comment => {
                console.log(comment)
            })
        }
    }

    updatePosts = (sortBy) => {
        const posts = this.state.posts
        switch (sortBy) {
            case "timestampDesc":
                posts.sort((a, b) => {
                    return (new Date(a.timestamp) < new Date(b.timestamp))
                })
                this.setState({
                    posts: posts
                })
                break;
            case "timestampAsc":
                posts.sort((a, b) => {
                    return (new Date(a.timestamp) > new Date(b.timestamp))
                })
                this.setState({
                    posts: posts
                })
                break;
            case "voteDesc":
                posts.sort((a, b) => {
                    return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
                })
                this.setState({
                    posts: posts
                })
                break;
            case "voteAsc":
                posts.sort((a, b) => {
                    return (parseInt(a.voteScore, 10) - parseInt(b.voteScore, 10))
                })
                this.setState({
                    posts: posts
                })
                break;
            default:
                break;
        }
    }

    componentDidMount() {

        ReadableAPI.getCategories().then((categories) => {
            this.setState({
                categories: categories
            })
        })

        ReadableAPI.getAllPosts().then((posts) => {
            posts.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })
            this.setState({
                posts: posts
            })
        })
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li className="logo">
                                <Link to="/"><img src={logo} className="App-logo" alt="logo" />Readable</Link>
                            </li>
                            <li className="edit">
                                <Link to="/editPost"><img src={pencil} className="App-logo" alt="logo" />Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* Root page shows categories and all posts */}
                    <Route exact path="/" render={props => (
                        <Home categories={this.state.categories} posts={this.state.posts} updatePosts={this.updatePosts}  {...props} />
                    )} />

                    {/* Category view */}
                    <Route path="/category/" render={props => (
                        <section className="mainContent">
                            <Home categories={this.state.categories} posts={this.state.posts} updatePosts={this.updatePosts}  {...props} />
                        </section>
                    )} />

                    {/* Post Detail view */}
                    <Route path="/posts/" render={props => (
                        <section className="mainContent">
                            <PostDetail categories={this.state.categories} onEditPost={(post, isEdit) => {
                                this.editPost(post, isEdit)
                            }} onEditComment={(comment, isEdit) => {
                                this.editComment(comment, isEdit)
                            }} {...props} />
                        </section>
                    )} />

                    {/* create post */}
                    <Route path="/editPost" render={(props) => (
                        <div className="postDetail">
                            <EditPost isEditingPost={false} post={{}} categories={this.state.categories} onEditPost={(post) => {
                                this.editPost(post)
                            }}   {...props} />
                        </div>
                    )} />

                    <Route component={NoMatch} />
                </Switch>

            </div>
        );
    }
}

export default App;
