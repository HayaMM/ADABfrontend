import React, { Component } from 'react'
import axios from "axios";
import { Container, Form, Button, Alert } from 'react-bootstrap'

export default class ResetPassword extends Component {
    state={}
    changeHandler = (e) => {
        let temp = { ...this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)

    }
    checkPassword = () => {
      
        if (this.state.password === this.state.confpassword){
           this.changepasswordHandler();
        }else{}

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
                <Container noValidate autoComplete="off">
                    <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" name="password"  helpertext="Incorrect entry."
					 placeholder="Enter your new password"  onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"  name="confpassword" 
                        	placeholder="Confirm your new password"  onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={this.checkPassword}>Change</Button>
                </Container>
                
       </div>
        )
    }
}
