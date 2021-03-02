import React, { Component } from 'react'

export default class UserDetails extends Component {
    render() {
        return (
            <div className="stdiv">
                <div className="h">
                    <h2 className="h">My Information</h2>
                First Name:  <b>{this.props.user.firstName}</b><br />
                 Last Name: <b>{this.props.user.lastName}</b><br />
                Email Addrees: <b> {this.props.user.emailAddress}</b><br />
                 Date Of Birth:<b> {this.props.user.dateofBirth}</b><br />
                 profile image :   <br /> <br /> <Image theimage={this.props.user.image} id={this.props.user.id} loadUserProfile={this.props.loadUserProfile} />
                </div>

            </div>
        )
    }
}
