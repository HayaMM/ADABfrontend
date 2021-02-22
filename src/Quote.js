import React, { Component } from 'react'

export default class Quote extends Component {
    render() {
        return (
            <div>
                {this.props.qbody}
            </div>
        )
    }
}
