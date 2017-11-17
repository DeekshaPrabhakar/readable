import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
const uuidv1 = require('uuid/v1')

class EditPost extends Component {
    state = {
        categories: this.props.categories
    }

    handleSubmit = (e, isEdit, post) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        if (!isEdit) {
            const postId = uuidv1()
            values.id = postId
        } else {
            values.id = post.id
        }

        values.timestamp = Date.now()
        values.deleted = false

        console.log(values)

        if (this.props.onEditPost) {
            this.props.onEditPost(values, isEdit)
        }
        if (this.props.toggleEditPost) {
            this.props.toggleEditPost();
        }
    }

    render() {
        const categories = this.state.categories ? this.state.categories : []
        const isEdit = this.props.isEditingPost
        const post = this.props.post

        return (
            <form onSubmit={(e) => {
                this.handleSubmit(e, isEdit, post)
            }} className="editform">
                <div className="editdetails">
                    <input type="text" name="title" placeholder="Title" defaultValue={post.title ? post.title : ""} />
                    <textarea name="body" placeholder="Detail" cols="10" rows="5" defaultValue={post.body ? post.body : ""} />
                    <div className="tags">
                        {categories.map((category) => (
                            <div key={category.name} className="tag">
                                <input type="checkbox" id={category.name} name="category" value={category.name} defaultChecked={post.category === category.name ? true : false} />
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
    return { categories: categories };
}

export default connect(mapStateToProps)(EditPost)