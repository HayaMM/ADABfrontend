import React, { Component } from 'react'
import Users from './Users'
import axios from 'axios';
export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],

        }
    }

    componentDidMount(){
        this.loadUserList();
         }
         loadUserList =()=>{
             axios.get("/adab/user/index")
             .then(response =>{
                 console.log(response)
                 this.setState({
                     users: response.data
                 })
             })
             .catch(error =>{
                 console.log("Error retreiving Authors !!");
                 console.log(error);
             })
         }
         deleteAccount= (id) =>{
            axios.delete(`/adab/user/delete?id=${id}`)
                .then(response =>{
                    console.log("Deleted!")
                    console.log(response)
                    this.loadUserList();
                })
                .catch(error =>{
                    console.log("Error Deleting account!")
                    console.log(error)
                })
        }
    render() {
        return (
            <div>
                <h6>All Account in adab website</h6>
                <ul>
                    {this.state.users.map((user, index) =>
                    <div key={index}>
                    <Users {...user}  deleteAccount ={this.deleteAccount} />
                    </div>)}
                </ul>
            </div>
        )
    }
}
