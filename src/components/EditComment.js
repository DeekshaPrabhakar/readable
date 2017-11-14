import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
const uuidv1 = require('uuid/v1')

class EditComment extends Component {

    handleCommentSubmit = (e, isEdit, comment) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        if (!isEdit) {
            const commentId = uuidv1()
            values.id = commentId
            values.deleted = false
        }else{
            values.id = comment.id
            delete values.author
            delete values.parentId
        }

        values.timestamp = Date.now()

        console.log(values)

        if (this.props.onEditComment) {
            this.props.onEditComment(values, isEdit)
        }
    }

    render() {
        const isEdit = (this.props.location && this.props.location.state) ? true : false
        const comment = isEdit ? this.props.location.state.comment : {}

        return (
            <div className="editCommentDiv">
                <form onSubmit={(e) => {
                    this.handleCommentSubmit(e, isEdit, comment)
                }} className="editCommentform">
                    <div className="editCommentdetails">
                        <textarea name="body" placeholder="Add Comment" cols="10" rows="5" defaultValue={comment.body ? comment.body : ""} />
                        <input type="hidden" name="author" defaultValue={comment.author ? comment.author : "Deeksha Prabhakar"} />
                        <input type="hidden" name="parentId" defaultValue={comment.parentId ? comment.parentId : this.props.postID} />
                        <input type="submit" value="Comment" />
                        <input type="button" value="Cancel" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditComment