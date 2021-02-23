import React, { Component } from 'react'

export default class Quote extends Component {
    render() {
        return (
            <div>
                {this.props.qbody}
                <br />
                <button onClick={() => { this.props.deleteQuote(this.props.id) }}>Delete "{this.props.qtitle}"</button>
                <hr />
            </div>
        )
    }
}
