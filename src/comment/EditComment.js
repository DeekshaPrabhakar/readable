import React, { Component } from 'react'
import serializeForm from 'form-serialize'
const uuidv1 = require('uuid/v1')

class EditComment extends Component {

    state = {
        isEditing: false,
        commentBody: (this.props.comment) ? this.props.comment.body : ''
    }

    handleCommentSubmit = (e, isEdit, comment) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now()

        if (!isEdit) {
            const commentId = uuidv1()
            values.id = commentId
            values.deleted = false
            this.props.createNewComment(values)
        } else {
            values.id = comment.id
            delete values.author
            delete values.parentId
            this.props.editExistingComment(values)
        }

        this.clearForm()
        if (this.props.toggleEditComment) {
            this.props.toggleEditComment()
        }
    }

    updateCommentBody = (body) => {
        this.setState({ commentBody: body })
    }

    clearForm = () => {
        this.setState({
            commentBody: '',
            isEditing: false
        })
    }

    render() {
        const comment = this.props.comment ? this.props.comment : {}

        return (
            <div className="editCommentDiv">
                <form onSubmit={(e) => {
                    this.handleCommentSubmit(e, this.props.isEditingComment, comment)
                }} className="editCommentform">
                    <div className="editCommentdetails">
                        <textarea name="body" value={this.state.commentBody} onChange={(event) => this.updateCommentBody(event.target.value)} placeholder="Add Comment" cols="10" rows="5" />
                        <input type="hidden" name="author" defaultValue={comment.author ? comment.author : "Deeksha Prabhakar"} />
                        <input type="hidden" name="parentId" defaultValue={comment.parentId ? comment.parentId : this.props.postID} />
                        <input type="submit" value="Comment" />
                        <input type="button" value="Cancel" onClick={this.props.toggleEditComment} />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditComment