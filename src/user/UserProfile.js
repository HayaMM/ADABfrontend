import React, { Component } from 'react'

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <li>
                 {this.props.user.id}
                  {this.props.user.firstName}
                  {this.props.user.lastName}
                  {this.props.user.emailAddress}
                  {this.props.user.dateofBirth}
                  </li>
            </div>
        )
    }
}
