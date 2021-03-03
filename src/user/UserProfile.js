import React, { Component } from 'react'
import Image from './Image'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class UserProfile extends Component {
clicked = () => {
    console.log("logout")
    this.props.onLogoutHandler();
}
    render() {
        return (
            <div>
            <h2 className="h">User's Profile</h2>

            <div className="stdiv">
                <Router>
                <Button className="smlbtn"> <Link to="/logout" style={{ color: 'inherit', textDecoration: 'none' }}onClick={() => this.clicked()}>Logout ?</Link></Button>
                </Router>
                <div className="h">
                    <h2 className="h">My Information</h2>
                    {/* user_id:  {this.props.user.id} <br/> */}
                First Name:  <b>{this.props.user.firstName}</b><br />
                 Last Name: <b>{this.props.user.lastName}</b><br />
                Email Addrees: <b> {this.props.user.emailAddress}</b><br />
                 Date Of Birth:<b> {this.props.user.dateofBirth}</b><br />
                 profile image :   <br /> <br /> <Image theimage={this.props.user.image} id={this.props.user.id} loadUserProfile={this.props.loadUserProfile} />
                    <br />  <Button className="btn" variant="primary" onClick={() => { this.props.editView(this.props.user.id) }}>Edit</Button>
                    {/* <button onClick={()=>{this.props.deleteAccount(this.props.id)}}>Delete account</button> */}

                </div>

            </div>
            </div>
        )
    }
}
