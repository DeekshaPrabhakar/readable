import React, { Component } from 'react'
import CategoryList from './CategoryList'
import Posts from './Posts'

class Home extends Component {
    render() {
        const category = this.props.location.state ? this.props.location.state.category : "";
       
        return (
            <div className="main">
                <CategoryList selectedCategory={category} />
                <Posts selectedCategory={category} updatePosts={this.props.updatePosts} />
            </div>
        );
    }
}

export default Home;