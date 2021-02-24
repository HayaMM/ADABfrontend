import React, { Component } from 'react'

export default class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newUser: props.user
        }
    }
    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const updatedUser = { ...this.state.newUser }
        updatedUser[attributeToChange] = newValue
        console.log(updatedUser)
        this.setState({ newUser: updatedUser })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editUser(this.state.newUser);
    }
    render() {
        return (
            <div>
                 <h1>Edit {this.state.newUser.id}!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input name="firstName" type="text" value={this.state.newUser.firstName}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input name="lastName" type="text"  value={this.state.newUser.lastName}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input name="emailAddress" type="text" value={this.state.newUser.emailAddress}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input
                            name="dateofBirth"
                            type="text"
                            value={this.state.newUser.dateofBirth}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <input type="submit" value="Edit Profile"></input>
                    </div>
                </form>
            </div>
        )
    }
}
