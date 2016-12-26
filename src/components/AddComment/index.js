import React, { Component, PropTypes } from 'react'

import './style.css';

class AddComment extends Component {
    static propTypes = {

    };

    state = {
        comment: ''
    }

    render() {
        return (
            <div >
                Input comment:<br />
                <textarea className="AddComment" value={this.state.comment} onChange={this.handleChange} /><br />
                <button onClick={this.handleAddComment}>Add comment</button>
            </div>
        )
    }

    handleChange = ev => {
        this.setState({
            comment: ev.target.value
        })
    }

    handleAddComment = ev => {
        console.log(this.state.comment)
    }

}

export default AddComment
