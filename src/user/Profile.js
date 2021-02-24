import React, { Component } from 'react'
import axios from 'axios';
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
        }
    }
    componentDidMount(){
   this.loadAuthorList();
    }
    loadAuthorList =()=>{
        axios.get("/adab/user/profile")
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
    }
    render() {
        return (
            <div>
                  {this.state.id}
                  {this.state.firstName}
                  {this.state.lastName}
                  {this.state.emailAddress}
                  {this.state.dateofBirth}
                  {/* <button onClick={() => { this.props.editView(this.props.id) }}>Edit "{this.props.id}"</button> */}
            </div>
        )
    }
}
