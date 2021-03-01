import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import "./UserPassword/Forms.css";
export default class Register extends Component {
    state = {
        userRole: "ROLE_USER",
        errors: '',
        passwordfield: false,
        comfpasswordfield: false,
    }

    registerHandler = () => {
        this.props.register(this.state);

    }
    checkPassword = () => {
        if (this.state.password === this.state.confpassword && (!!this.state.password || !!this.state.confpassword)) {
            this.registerHandler();
        } else if (!this.state.password && !this.state.confpassword) {
            console.log("full the fields please");
            this.setState({
                errors: 'Passwords fields should not be empty',
                passwordfield: true,
                comfpasswordfield: true
            })
        }
        else {
            console.log("don't match");
            this.setState({
                errors: 'Passwords DO NOT match',
                comfpasswordfield: true
            })
        }

    }
    changeHandler = (e) => {
        let temp = { ...this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        console.log(temp);
    }

    render() {
        return (
            <div>
                <Container>
                    <Form.Group>
                        <TextField fullWidth type="text" name="firstName" label="First Name" placeholder="Enter your First Name" onChange={this.changeHandler}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth name="lastName" type="text" label="Last Name" placeholder="Enter your Last Name" onChange={this.changeHandler}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth type="date" name="dateofBirth" placeholder="Enter your date of birth " onChange={this.changeHandler}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth type="email" name="emailAddress" label=" Email Address" placeholder="Enter your Email Address" onChange={this.changeHandler}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth type="password" name="password" label="Password" placeholder="Enter your Password" onChange={this.changeHandler} error={this.state.passwordfield ? true : false} ></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth label="Confirm Password" type='password' name="confpassword" error={this.state.comfpasswordfield ? true : false} placeholder="Confirm your new password" onChange={this.changeHandler} />
                    </Form.Group>


                    <input type="hidden" ref={this.userRole} />
                    <Button className="btn" variant="primary" block onClick={this.checkPassword} >Register</Button>
                </Container>
            </div>
        )
    }
}