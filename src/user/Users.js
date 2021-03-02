import React, { Component } from 'react'
import axios from 'axios';
import UsersAccount from './UsersAccount'
import { Button } from 'react-bootstrap'


export default class Users extends Component {
    state = {
        Role: this.props.userRole,
        user: [],
        isseemore: false
    }

    onclickdetalis = () => {
        this.setState({
            isseemore: !this.state.isseemore
        })
    }
    render() {
        const admin = (this.props.isUserRole) ? <div>
            {(this.state.Role === "ROLE_USER") ? <Button onClick={() => { this.props.deleteAccount(this.props.id) }}>Delete account</Button> : null}</div> : null;
        <br />
        const isseemore = this.state.isseemore ? <UsersAccount user={this.props} onclickdetalis={this.onclickdetalis} userEmail={this.props.userEmail} loadQuote={this.loadQuote}></UsersAccount> :
            <div>
                {admin}
                <br />
                <b><div className="h">{this.props.firstName} {this.props.lastName}</div></b><br />
                <Button onClick={() => this.onclickdetalis()}>See more</Button>

            </div>;


        return (
            <div className="stdiv">

                {isseemore}
            </div>
        )
    }
}
