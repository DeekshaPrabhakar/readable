import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
const uuidv1 = require('uuid/v1');

class EditPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
        const postId = uuidv1()
        values.id = postId
        values.timestamp = Date.now()
        values.deleted = false
        if (this.props.onEditPost) {
            this.props.onEditPost(values)
        }
    }

    render() {
        const categories = this.props.categories
        return (
            <div className="editDiv">
                <form onSubmit={this.handleSubmit} className="editform">
                    <div className="editdetails">
                        <input type="text" name="title" placeholder="Title" />
                        <textarea name="body" placeholder="Detail" cols="10" rows="5" />
                        <div className="tags">
                            {categories.map((category) => (
                                <div key={category.name} className="tag">
                                    <input type="checkbox" id={category.name} name="category" value={category.name} />
                                    <label htmlFor={category.name}>{category.name}</label>
                                </div>
                            ))}
                        </div>
                        <input type="hidden" name="author" value="Deeksha Prabhakar" />
                        <button>Post</button>
                        <Link className="closeEdit" to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPost