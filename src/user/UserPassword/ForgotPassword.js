import React, { Component } from 'react'
import axios from "axios";
import { Container, Form, Button, Alert } from 'react-bootstrap'


export default class ForgotPassword extends Component {
    state = {
        mail: null,
        successMessage : null,
        message : null
    }
    changepasswordHandler = (email) => {
        axios.post(`/adab/user/forgotpassword?emailAddress=${email}`)
            .then(response => {
                console.log(" " + response.data)
               if(response.data !== null){
                   this.setState({
                    successMessage: true,
                    message : response.data
                   })
               }
            })
            .catch(error => {
                console.log("Error in ForgotPassword page !!");
                console.log(error);
            })
    }


    changeHandler = (e) => {

        let email = e.target.value;
        console.log("mail " + email);
        this.setState({
            mail: email
        })

    }
    render() {
        // to show message alert..
    const message = this.state.successMessage ? (<Alert variant="info ">{this.state.message}</Alert>) : null;
        return (
            <div>
                 {message}
                <Container>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="emailAddress" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={() => this.changepasswordHandler(this.state.mail)}>Send</Button>
                </Container>
            </div>
        )
    }
}
