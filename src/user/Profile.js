import React, { Component } from 'react'
import axios from 'axios';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
            isEdit: false,
            clickedUserId : '',

        }
    }
    componentDidMount(){
   this.loadUserProfile();

    }
    loadUserProfile =( )=>{
        let user = localStorage.getItem("user")
        console.log(user)
        axios.get(`/adab/user/profile?emailAddress=${user}`)
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

    editView =(id) =>{
        this.setState({
            isEdit: !this.state.isEdit,
            clickedUserId: id
        })
    }
    editProfile = (user) =>{
        console.log(this.props.profile.sub)
        axios.put("/adab/user/edit",user)
            .then(response =>{
                console.log("Edited!!")
                console.log(response)
                this.loadUserProfile();
            })
            .catch(error =>{
                console.log("Error Editing profile");
                console.log(error)
            })
    }
    
    render() {
        return (
            <div>
                <UserProfile user={this.state.user} editView={this.editView} loadUserProfile={this.loadUserProfile}  onLogoutHandler={() => this.props.onLogoutHandler()}/>

  
                {(this.state.isEdit && this.state.clickedUserId === this.state.user.id) ? <EditProfile user={this.state.user} editProfile={this.editProfile} /> : null}
        
            </div>
        )
    }
}
