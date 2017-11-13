import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableUtil from '../ReadableUtil'
import profile from '../images/profile.png'
import user from '../images/user.png'

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
                            <div className="postInfo">
                                <span className="profileImage">
                                    <img src={post.author === "Deeksha Prabhakar" ? profile : user} />
                                </span>
                                <span className="author">
                                    <address>{post.author}</address>
                                    <time>{ReadableUtil.formatDate(post.timestamp)}</time>
                                </span>
                            </div>
                            <p className="excerpt">
                                {post.body}
                            </p>
                            <p className="postCategory">
                                {post.category}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Posts;