import React, { Component } from 'react'
import axios from "axios";
import { Container, Form, Button, Toast  } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';


export default class ResetPassword extends Component {
    state = {
        errors: '',
        passwordfield: false,
        comfpasswordfield: false,
        showA : true

    }
    changeHandler = (e) => {
        let temp = { ...this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)

    }
     
    checkPassword = () => {
        if (this.state.password === this.state.confpassword && (!!this.state.password  || !!this.state.confpassword )) {
            this.changepasswordHandler();
        } else if (!this.state.password  && !this.state.confpassword) {
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
    toggleShowA = () =>{
        this.setState({
            showA : !this.state.showA
        })
    }
    render() {

        const message = this.state.errors ? 
        (
 <Toast  animation={true} show={this.state.showA} onClose={this.toggleShowA}delay={3000} >
          <Toast.Header>
          </Toast.Header>   
           <Toast.Body><strong>{this.state.errors}</strong></Toast.Body>
  </Toast>
  ) 

            : null;

        return (
            <div>
                <Container >
                    <Form.Group>
                    {message}

                        
                             <TextField 
                             fullWidth
                             type="password"
                        label=" New Password"
                        name="password"
                        error={this.state.passwordfield ? true : false }
                        placeholder="Enter your new password"
                        onChange={this.changeHandler}
                        variant="filled"
                        
                      />
                    </Form.Group>
                    <Form.Group>
                        <TextField 
                        fullWidth
                        label="Confirm Password"
                        type='password'
                        error={this.state.comfpasswordfield ? true : false }
                        placeholder="Confirm your new password"
                        onChange={this.changeHandler}
                        variant="filled"
                        
                      />        
                              
                    </Form.Group>
                    
                    <Button variant="primary" onClick={this.checkPassword}>Change</Button>
                </Container>

            </div>
        )
    }
}
