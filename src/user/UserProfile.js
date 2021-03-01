import React, { Component } from 'react'
import Image from './Image'


export default class UserProfile extends Component {

    render() {
        return (
            <div className="stdiv">
                <div className="h">
                    <h2 className="h">My Information</h2>
                    {/* user_id:  {this.props.user.id} <br/> */}
                First Name:  <b>{this.props.user.firstName}</b><br />
                 Last Name: <b>{this.props.user.lastName}</b><br />
                Email Addrees: <b> {this.props.user.emailAddress}</b><br />
                 Date Of Birth:<b> {this.props.user.dateofBirth}</b><br />
                 profile image :   <br /> <br /> <Image theimage={this.props.user.image} id={this.props.user.id} loadUserProfile={this.props.loadUserProfile} />
                    <br />  <button className="btn" variant="primary" onClick={() => { this.props.editView(this.props.user.id) }}>Edit</button>
                    {/* <button onClick={()=>{this.props.deleteAccount(this.props.id)}}>Delete account</button> */}

                </div>

            </div>
        )
    }
}
