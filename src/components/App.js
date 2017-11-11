import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo64.png';
import pencil from '../images/pencil.png';
import '../App.css';
import * as ReadableAPI from '../ReadableAPI';
import Home from './Home';

class App extends Component {

    state = {
        categories: [],
        posts: []
    }

    componentDidMount() {

        ReadableAPI.getCategories().then((categories) => {
            this.setState({
                categories: categories
            })
        })

        ReadableAPI.getAllPosts().then((posts) => {
            this.setState({
                posts: posts
            })
        })
    }

    render() {
        const categories = this.state.categories
        const posts = this.state.posts

        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li class="logo">
                                <Link to="/"><img src={logo} className="App-logo" alt="logo" />Readable</Link>
                            </li>
                            <li class="edit">
                                <Link to="/edit"><img src={pencil} className="App-logo" alt="logo" />Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* Index page shows only 10 books. To see all books, go to the shelf detail page */}
                    <Route exact path="/" render={props => (
                        <Home categories={this.state.categories} posts={this.state.posts}  {...props} />
                    )} />
                </Switch>

            </div>
        );
    }
}

export default App;
