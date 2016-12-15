import React, { Component } from 'react'

export default class Article extends Component {
    state = {
        isOpen: false,
	isCommentOpen: false
    }


/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleShowCommentOpen = () => {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <br/>
                <button onClick = {this.toggleShowCommentOpen}>{this.getTitle()}</button>
                
            </section>

        )
    }

    getTitle() {
        if (this.state.isCommentOpen) {
            return ('hide')
        } else {
            return ('show')
        }
    }
}