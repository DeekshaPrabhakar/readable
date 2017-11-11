import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo64.png';
import pencil from '../images/pencil.png';
import '../App.css';
import * as ReadableAPI from '../ReadableAPI';
import Categories from './Categories';

class App extends Component {

    state = {
        categories: []
    }

    componentDidMount() {

        ReadableAPI.getCategories().then((categories) => {
            this.setState({
                categories: categories
            })
        })
    }

    render() {
        const categories = this.state.categories;

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
                <div className="main">
                    <Categories categories={this.state.categories} />
                </div>
            </div>
        );
    }
}

export default App;
