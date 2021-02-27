import React, { Component } from 'react'
import Image from './Image'

export default class UserProfile extends Component {
    render() {
        return (
            <div className="stdiv">
                
                user_id:  {this.props.user.id} <br/>
                First Name:  {this.props.user.firstName}<br/>
                 Last Name: {this.props.user.lastName}<br/>
                Email Addrees:  {this.props.user.emailAddress}<br/>
                 Date Of Birth: {this.props.user.dateofBirth}<br/>
                 profile image : <Image image={this.props.user.image}/>
                 <button onClick={()=>{this.props.editView(this.props.user.id)}}>Edit</button>
                 <button onClick={()=>{this.props.deleteAccount(this.props.id)}}>Delete account</button>

               
                
            </div>
        )
    }
}
