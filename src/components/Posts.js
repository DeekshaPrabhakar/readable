import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableUtil from '../ReadableUtil'

class Posts extends Component {

    render() {
        const posts = this.props.posts
        return (
            <div className="postsDiv">
                <div className="sortPosts">
                    <span>Sort By:&nbsp;</span><select onChange={(event) => {
                        this.props.updatePosts(event.target.value);
                    }
                    } >
                        <option value="voteDesc">Votes: Descending</option>
                        <option value="voteAsc">Votes: Ascending</option>
                        <option value="timestampDesc">Post Date: Descending</option>
                        <option value="timestampAsc">Post Date: Ascending</option>

                    </select>
                </div>
                <ul className="postSection">
                    {posts.map((post) => (
                        <li key={post.id} className="post">
                            <Link to={{
                                pathname: '/posts/' + post.title.split(' ').join('_'),
                                state: { post: post }
                            }}>
                                <p className="postTitle">
                                    {post.title}
                                </p>
                            </Link>
                            <p className="excerpt">
                                {post.body}
                            </p>
                            <div>
                                <span className="postInfo">
                                    <address>{post.author}</address>
                                    <time>{ReadableUtil.formatDate(post.timestamp)}</time>
                                </span>
                                <span className="postCategory">
                                    {post.category}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Posts;