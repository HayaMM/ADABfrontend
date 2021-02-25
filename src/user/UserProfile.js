import React, { Component } from 'react'

export default class UserProfile extends Component {
    render() {
        return (
            <div className="stdiv">
                
                user_id:  {this.props.user.id} <br/>
                First Name:  {this.props.user.firstName}<br/>
                 Last Name: {this.props.user.lastName}<br/>
                Email Addrees:  {this.props.user.emailAddress}<br/>
                 Date Of Birth: {this.props.user.dateofBirth}<br/>
                
            </div>
        )
    }
}
