import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import "./UserPassword/ForgotPassword.css";
export default class Register extends Component {
   state={ userRole:"ROLE_USER"}

   registerHandler = () => {
    this.props.register(this.state);
}
   changeHandler=(e)=>{
    let temp={...this.state}
    temp[e.target.name]=e.target.value;
    this.setState(temp)
    console.log(temp);
   }
   
    render() {<Form.Group>
        <TextField  fullWidth type="email" name="emailAddress"  label="Email Address" placeholder="Enter your Email Address"   variant="filled" onChange={this.changeHandler}/>
    </Form.Group>
        return (
            <div>
            <Container>
                <Form.Group>
                    <TextField fullWidth type="text" name="firstName" label="First Name" placeholder="Enter your First Name" onChange={this.changeHandler}></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth name="lastName"  type="text" label="Last Name" placeholder="Enter your Last Name" onChange={this.changeHandler}></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth type="date" name="dateofBirth"  placeholder="Enter your date of birth " onChange={this.changeHandler}></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth  type="email" name="emailAddress" label=" Email Address" placeholder="Enter your Email Address" onChange={this.changeHandler}></TextField>
                </Form.Group>
                <Form.Group>
                    <TextField fullWidth  type="password" name="password" label="Password" placeholder="Enter your Password" onChange={this.changeHandler}></TextField>
                </Form.Group>
            

                <input type="hidden"  ref={this.userRole} />
                <button className="btn" variant="primary" block onClick={this.registerHandler} >Register</button>
            </Container>
        </div>
        )
    }
}