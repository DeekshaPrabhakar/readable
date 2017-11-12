import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
    render() {
        const posts = this.props.posts
        return (
            <ul class="postSection">
                {posts.map((post) => (
                    <li key={post.id} className="post">
                        <Link to={{
                            pathname: '/posts/' + post.id,
                            state: { post: post }
                        }}>
                            <p className="postTitle">
                                {post.title}
                            </p>

                        </Link>
                        
                    </li>
                ))}
            </ul>
        );
    }
}

export default Posts;