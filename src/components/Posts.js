import React, { Component } from 'react'
import Post from './Post'
import PostSortControl from './PostSortControl'
import { connect } from 'react-redux'
import { updatePostRedirect } from '../actions/postActions'

class Posts extends Component {

    state = {
        posts: this.props.posts
    }

    updatePosts = (sortBy) => {
        const posts = this.props.posts
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

    componentWillMount() {
        this.props.updateRedirect()
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
        const posts = category !== "" ? this.props.posts.filter(post => post.category === category) : this.props.posts

        return (
            <div className="postsDiv">
                <PostSortControl updatePosts={this.updatePosts}></PostSortControl>
                <div className="postSection">
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const posts = state.postReducer.posts
    return { posts: posts };
}


function mapDispatchToProps(dispatch) {
    return {
        updateRedirect: () => dispatch(updatePostRedirect())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)