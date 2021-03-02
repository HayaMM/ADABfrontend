import React, { Component } from 'react'
import axios from 'axios';
import UsersAccount from './UsersAccount'


export default class Users extends Component {
    state = {
        Role:this.props.userRole,
        user : [],
        isseemore: false
    }
    
    onclickdetalis = () =>{
        this.setState({
            isseemore : !this.state.isseemore
        })
    }
    render() {
        const admin=  (this.props.isUserRole) ? <div>
        {(this.state.Role ==="ROLE_USER") ? <button onClick={()=>{this.props.deleteAccount(this.props.id)}}>Delete account</button> : null}</div>: null ;
        
         const isseemore = this.state.isseemore ? <UsersAccount user={this.props} onclickdetalis={this.onclickdetalis} userEmail={this.props.userEmail} loadQuote={this.loadQuote}></UsersAccount> : 
      <div>
         {admin}
         <b>{this.props.firstName} {this.props.lastName}</b>
         <button onClick={()=> this.onclickdetalis()}>see More</button> 
         
           </div> ;
        

        return (
            <div>
        
          {isseemore}
            </div>
        )
    }
}
