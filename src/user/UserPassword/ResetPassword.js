import React, { Component } from 'react'
import axios from "axios";
import { Container, Form, Button, Alert } from 'react-bootstrap'

export default class ResetPassword extends Component {
    state={
        errors : ''
    }
    changeHandler = (e) => {
        let temp = { ...this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)

    }
    checkPassword = () => {
        if (this.state.password === this.state.confpassword && (this.state.password  == 'undefined' || this.state.confpassword ) ){
           this.changepasswordHandler();
        }else if (this.state.password == 'undefined' || this.state.confpassword == 'undefined' ){
            console.log("full the fields please");        
            this.setState({
                errors : 'Passwords fields should not be empty'
            })
        }
        else{
            console.log("don't match");        
            this.setState({
                errors : 'Passwords DO NOT match'
            })
        }

    }
    changepasswordHandler = () => {
         const search = window.location.search;
         const query = new URLSearchParams(search);
         const token = query.get('token')
       console.log(token);
            axios.post(`/adab/user/resetpassword?token=${token}&password=${this.state.password}`)
                .then(response => {
                    console.log(" " + response.data)
                   
                })
                .catch(error => {
                    console.log("Error in resetPassword page !!");
                    console.log(error);
                })
    }

    render() {
        return (
            <div>
                {/* {message} */}
                <Container >
                    <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" name="password" 
                        
					 placeholder="Enter your new password"  onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"  name="confpassword" 
                        	placeholder="Confirm your new password"  onChange={this.changeHandler}></Form.Control>
                            <div >{this.state.errors}</div>
                    </Form.Group>
                    <Button variant="primary" onClick={this.checkPassword}>Change</Button>
                </Container>
                
       </div>
        )
    }
}
