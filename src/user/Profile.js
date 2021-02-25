import React, { Component } from 'react'
import axios from 'axios';
import UserProfile from './UserProfile';
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
        }
    }
    componentDidMount(){
   this.loadUserProfile();
    }
    loadUserProfile =( )=>{
        axios.get(`/adab/user/profile?emailAddress=${this.props.profile.sub}`)
        .then(response =>{
            console.log(response)
            this.setState({
                user: response.data
            })
        })
        .catch(error =>{
            console.log("Error retreiving users !!");
            console.log(error);
        })
    } ; 
    render() {
        return (
            <div>
                <UserProfile user={this.state.user}/>
        
            </div>
        )
    }
}
