import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import ForgotPassword from './UserPassword/ForgotPassword';


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
            isSwitch : value
        })
    }
    render() {

        const isSwitch = !this.state.isSwitch ? ( <Container>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="emailAddress" onChange={this.changeHandler}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={this.changeHandler}></Form.Control>
            </Form.Group>
            <Button variant="primary" block onClick={this.loginHandler}>Login</Button>
            <Button variant="primary" block onClick={() =>this.switch(true)}>Forgot password</Button>

        </Container>) :  <ForgotPassword switch={this.switch}/>
        return (
            <div>
               
               {isSwitch}
                
            </div>
        )
    }
}