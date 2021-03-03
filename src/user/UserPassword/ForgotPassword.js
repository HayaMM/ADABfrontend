import React, { Component } from 'react'
import "./Forms.css";
import axios from "axios";
import { Container, Form, Alert, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';


export default class ForgotPassword extends Component {
    state = {
        mail: null,
        successMessage: null,
        message: null,
        emailAddressfield: false,


    }
    checkemail = (email) => {
        console.log(!this.state.emailAddress);

        if (!this.state.emailAddress) {
            this.changepasswordHandler(email);
        } else {
            console.log("should not be empty");
            this.setState({
                message: 'Email Address field should not be empty',
                emailAddressfield: true,
                successMessage: true

            })
        }

    }
    changepasswordHandler = (email) => {
        axios.post(`${this.props.url}/user/forgotpassword?emailAddress=${email}`)
            .then(response => {
                console.log(" " + response.data)
                if (response.data !== null) {
                    this.setState({
                        successMessage: true,
                        message: response.data
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


                        <TextField
                            fullWidth
                            type="email"
                            label="Email Address"
                            name="emailAddress"
                            error={this.state.emailAddressfield ? true : false}
                            placeholder="Enter your Email Address"
                            onChange={this.changeHandler}
                            variant="filled"

                        />
                    </Form.Group>
                        <Button className="btn" onClick={() => this.checkemail(this.state.mail)}>Send</Button><br />
                        <hr/>
                        <Button className="btn" onClick={() => this.props.switch(false)}>already have an account</Button>

                </Container>
            </div>
        )
    }
}
