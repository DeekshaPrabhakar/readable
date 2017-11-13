import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'


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
                <div className="postSection">
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <Link to={{
                                pathname: '/posts/' + post.title.split(' ').join('_'),
                                state: { post: post }
                            }}>
                               <Post post={post} />
                            </Link>
                           
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Posts;