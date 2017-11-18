import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createPost, editPost } from '../actions/postActions'
const uuidv1 = require('uuid/v1')

class EditPost extends Component {
    state = {
        categories: this.props.categories,
        isEdit: this.props.isEditingPost,
        post: this.props.post,
        posts: this.props.allPosts,
        redirect: this.props.redirect
    }

    handleSubmit = (e, isEdit, post) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now()
        values.deleted = false

        if (!isEdit) {
            const postId = uuidv1()
            values.id = postId
            this.props.createNewPost(values)
        } else {
            values.id = post.id
            this.props.editExistingPost(values)
        }

        if (this.props.toggleEditPost) {
            this.props.toggleEditPost();
        }
    }

    render() {
        const isRedirect = this.props.redirect 
        if (isRedirect) {
            return <Redirect push to="/" />;
        }

        const categories = this.props.categories ? this.props.categories : []
        const isEdit = this.state.isEdit
        const post = this.state.post

        return (
            <form onSubmit={(e) => {
                this.handleSubmit(e, isEdit, post)
            }} className="editform">
                <div className="editdetails">
                    <input type="text" name="title" placeholder="Title" defaultValue={post.title ? post.title : ""} />
                    <textarea name="body" placeholder="Detail" cols="10" rows="5" defaultValue={post.body ? post.body : ""} />
                    <div className="tags">
                        {categories.map((category) => (
                            <div className="tag" key={category.name}>
                                <input id={category.name} type="radio" name="category" value={category.name} defaultChecked={post.category === category.name ? true : false} />
                                <label htmlFor={category.name}>{category.name}</label>
                            </div>
                        ))}
                    </div>
                    <input type="hidden" name="author" defaultValue={post.author ? post.author : "Deeksha Prabhakar"} />
                    <button>Post</button>
                    {isEdit && (
                        <input type="button" onClick={this.props.toggleEditPost} value="Cancel" />
                    )}
                    {!isEdit && (
                        <Link className="closeEdit" to="/">Cancel</Link>
                    )}
                </div>
            </form>
        )
    }
}
function mapStateToProps(state, ownProps) {
    const categories = state.categories
    const redirect = state.redirect ? state.redirect : false

    return { categories: categories, redirect: redirect };
}


function mapDispatchToProps(dispatch) {
    return {
        createNewPost: (post) => dispatch(createPost(post)),
        editExistingPost: (post) => dispatch(editPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)