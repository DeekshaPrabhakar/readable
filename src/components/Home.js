import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import Posts from './Posts';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <CategoryList categories={this.props.categories} />
                <Posts posts={this.props.posts} updatePosts={this.props.updatePosts} />
            </div>
        );
    }
}

export default Home;