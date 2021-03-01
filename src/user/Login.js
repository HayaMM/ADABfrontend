import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import ForgotPassword from './UserPassword/ForgotPassword';
import TextField from '@material-ui/core/TextField';
import "./UserPassword/Forms.css";

export default class Login extends Component {
    state = {
        isSwitch: false
    }
    loginHandler = () => {
        this.props.login(this.state);
    }
    changeHandler = (e) => {
        let temp = { ... this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        console.log(temp);
    }
    onClick = () => {

        // return  <Redirect  to="/ForgotPassword" />
        this.props.history.push('/ForgotPassword');

    }
    switch = (value) => {
        this.setState({
            isSwitch: value
        })
    }
    render() {
        const isSwitch = !this.state.isSwitch ? (<Container>
            <Form.Group>
                <TextField fullWidth type="email" name="emailAddress" label="Email Address" placeholder="Enter your Email Address" variant="filled" onChange={this.changeHandler} />
            </Form.Group>
            <Form.Group>
                <TextField fullWidth type="password" name="password" label="Password" placeholder="Enter your Password" variant="filled" onChange={this.changeHandler}></TextField>
            </Form.Group>
            <Button className="btn" variant="primary" block onClick={this.loginHandler}>Login</Button>
            <Button className="btn" variant="primary" block onClick={() => this.switch(true)}>Forgot password</Button>

        </Container>) : <ForgotPassword switch={this.switch} />
        return (
            <div>

                {isSwitch}

            </div>
        )
    }
}