import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class EditPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
        if (this.props.onEdit) {
            this.props.onEdit(values)
        }
    }

    render() {
        return (
            <div className="editDiv">
                
                <form onSubmit={this.handleSubmit} className="editform">
                    <div className="editdetails">
                        <input type="text" name="title" placeholder="Title" />
                        <textarea name="body" placeholder="Detail" cols="10" rows="5" />
                        <button>Post</button>
                        <Link className="closeEdit" to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPost