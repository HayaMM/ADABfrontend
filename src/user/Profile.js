import React, { Component } from 'react'
import axios from 'axios';
import UserProfile from './UserProfile';
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
   this.loadAuthorList();
    }
    loadAuthorList =( )=>{
        console.log(this.props.profile.sub)
        axios.get(`/adab/user/profile?emailAddress=${this.props.profile.sub}`)
        .then(response =>{
            console.log(response)
            this.setState({
                users: response.data
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
                <UserProfile user={this.state.users}/>
                  {/* <ul>
                    {this.state.users.map((user, index) =>
                    <div key={index}>
                    <UserProfile  {...user}/>
                   </div>)}
                    </ul> */}

                {/* //   {this.state.id}
                //   {this.state.firstName}
                //   {this.state.lastName}
                //   {this.state.emailAddress}
                //   {this.state.dateofBirth} */}
                  {/* <button onClick={() => { this.props.editView(this.props.id) }}>Edit "{this.props.id}"</button> */}
            </div>
        )
    }
}
