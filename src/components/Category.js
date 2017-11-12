import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts';

class Category extends Component {
    render() {
        const category = this.props.location.state.category;
        const posts = this.props.posts.filter(post => post.category === category)

        return (
            <div className="categoryView">
                <Posts posts={posts} />
            </div>
        );
    }
}

export default Category;