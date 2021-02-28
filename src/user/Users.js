import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        return (
            <div>
                {this.props.firstName}
                <button onClick={()=>{this.props.deleteAccount(this.props.id)}}>Delete account</button>
            </div>
        )
    }
}
