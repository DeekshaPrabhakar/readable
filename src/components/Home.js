import React, { Component } from 'react'
import CategoryList from './CategoryList'
import Posts from './Posts'

class Home extends Component {
    render() {
        const category = this.props.location.state ? this.props.location.state.category : "";
        const posts = this.props.location.state ? this.props.posts.filter(post => post.category === category) : this.props.posts

        return (
            <div className="main">
                <CategoryList categories={this.props.categories} selectedCategory={category} />
                <Posts posts={posts} updatePosts={this.props.updatePosts} />
            </div>
        );
    }
}

export default Home;