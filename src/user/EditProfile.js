import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import "./UserPassword/Forms.css";
import { Container, Form, Button } from 'react-bootstrap'
export default class EditProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newUser: props.user
        }
    }
    
    handleChange= (event) =>{
        const attributeToChange = event.target.name // name of input (email or name or date ...)
        const newValue= event.target.value /// value of this input 

        const updatedUser={...this.state.newUser} // ترجع اوبجيكت جديد
        updatedUser[attributeToChange]= newValue 
        console.log(updatedUser)
        this.setState({
            newUser: updatedUser
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.editProfile(this.state.newUser);
    }
    render() {
        return (
            <div >
                 <Container>
                <Form.Group>
                    <TextField fullWidth type="text" name="firstName" label="First Name" placeholder="Enter your First Name" onChange={this.handleChange} value={this.state.newUser.firstName} ></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth name="lastName"  type="text" label="Last Name" placeholder="Enter your Last Name" onChange={this.handleChange} value={this.state.newUser.lastName}></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth type="date" name="dateofBirth"  placeholder="Enter your date of birth " onChange={this.handleChange} value={this.state.newUser.dateofBirth}></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth  type="email" name="emailAddress" label=" Email Address" placeholder="Enter your Email Address" onChange={this.handleChange} value={this.state.newUser.emailAddress}></TextField>
                </Form.Group>
        
                {/* <input type="hidden"  ref={this.userRole} /> */}
                <button className="btn" variant="primary" block onClick={this.handleSubmit}>eddit profile"</button>
            </Container>
            </div>
        )
    }
}
