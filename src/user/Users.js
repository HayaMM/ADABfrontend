import React, { Component } from 'react'

export default class Users extends Component {
    state = {
        Role:this.props.userRole
    }

    render() {
        console.log(this.props.isUserRole)
        const admin= this.props.isUserRole ? <div>{this.props.firstName}
        {(this.state.Role ==="ROLE_USER") ? <button onClick={()=>{this.props.deleteAccount(this.props.id)}}>Delete account</button> : null}</div>: null;
        return (
            <div>
           {admin}
            </div>
        )
    }
}
