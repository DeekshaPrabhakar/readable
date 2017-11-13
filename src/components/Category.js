import React, { Component } from 'react'
import Posts from './Posts'

class Category extends Component {
    render() {
        const category = this.props.location.state.category;
        const posts = this.props.posts.filter(post => post.category === category)

        return (
            <div className="categoryView">
                <Posts updatePosts={this.props.updatePosts} posts={posts} />
            </div>
        );
    }
}

export default Category;