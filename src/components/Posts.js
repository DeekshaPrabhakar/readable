import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import { connect } from 'react-redux'

class Posts extends Component {

    state = {
        posts: this.props.posts
    }

    updatePosts = (sortBy) => {
        const posts = this.state.posts
        switch (sortBy) {
            case "timestampDesc":
                posts.sort((a, b) => {
                    return (new Date(a.timestamp) < new Date(b.timestamp))
                })
                this.setState({
                    posts: posts
                })
                break;
            case "timestampAsc":
                posts.sort((a, b) => {
                    return (new Date(a.timestamp) > new Date(b.timestamp))
                })
                this.setState({
                    posts: posts
                })
                break;
            case "voteDesc":
                posts.sort((a, b) => {
                    return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
                })
                this.setState({
                    posts: posts
                })
                break;
            case "voteAsc":
                posts.sort((a, b) => {
                    return (parseInt(a.voteScore, 10) - parseInt(b.voteScore, 10))
                })
                this.setState({
                    posts: posts
                })
                break;
            default:
                break;
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.posts.length > 0) {
            let posts = nextProps.posts
            posts.sort((a, b) => {
                return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
            })

            this.setState({
                posts: posts
            })
        }
    }

    render() {
        const category = this.props.selectedCategory
        const posts = category !== "" ? this.state.posts.filter(post => post.category === category) : this.state.posts

        return (
            <div className="postsDiv">
                <div className="sortPosts">
                    <span>Sort By:&nbsp;</span><select onChange={(event) => {
                        this.updatePosts(event.target.value);
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
                                pathname: '/posts/' + post.id.split('-').join(''),
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

function mapStateToProps(state, ownProps) {
    const posts = state.posts
    posts.sort((a, b) => {
        return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
    })
    return { posts: posts };
}


export default connect(mapStateToProps)(Posts)