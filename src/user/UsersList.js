import React, { Component } from 'react'
import Users from './Users'
import axios from 'axios';

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isUserRole: false

        }
    }

    componentDidMount() {
        this.loadUserList();
        this.TypeofUser();
    }
    loadUserList = () => {
        axios.get("/adab/user/index")
            .then(response => {
                console.log("userss " + response.data)
                this.setState({
                    users: response.data
                })
            })
            .catch(error => {
                console.log("Error retreiving Accounts !!");
                console.log(error);
            })
    }
    deleteAccount = (id) => {
        axios.delete(`/adab/user/delete?id=${id}`)
            .then(response => {
                console.log("Deleted!")
                console.log(response)
                this.loadUserList();
            })
            .catch(error => {
                console.log("Error Deleting account!")
                console.log(error)
            })
    }
    TypeofUser = () => {
        console.log(this.state.isUserRole)
        axios.get(`/adab/user/info?emailAddress=${this.props.userEmail}`)
            .then(response => {
                console.log("info !")
                console.log(response)
                if (response.data.userRole == "ROLE_ADMIN") {
                    this.setState({
                        isUserRole: true
                    })

                }
            })
            .catch(error => {
                console.log("Error  info!")
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <h2 className="h">Users of ADAB website</h2>
                <ul>
                    {this.state.users.map((user, index) =>
                        <div key={index}>
                            <Users {...user} isUserRole={this.state.isUserRole} userEmail={this.props.userEmail} deleteAccount={this.deleteAccount} />
                        </div>)}

                </ul>
            </div>
        )
    }
}
