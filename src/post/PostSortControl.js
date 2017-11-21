import React, { Component } from 'react'

class PostSortControl extends Component {
    render() {
        return (
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
        )
    }
}

export default PostSortControl