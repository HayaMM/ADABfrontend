import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import "./UserPassword/Forms.css";
import axios from "axios";
import { Container, Form, Button, Toast } from 'react-bootstrap'
export default class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newUser: props.user,
            errors: '',
            passwordfield: false,
            comfpasswordfield: false,
            showA: true,
            isEditpss: false
        }
    }

    changepasswordHandler = (e) => {
        let tempp = { ...this.state }
        tempp[e.target.name] = e.target.value;
        this.setState(tempp);
        console.log(tempp);


    }
    handleChange = (event) => {
        const attributeToChange = event.target.name // name of input (email or name or date ...)
        const newValue = event.target.value /// value of this input 

        const updatedUser = { ...this.state.newUser } // ترجع اوبجيكت جديد
        updatedUser[attributeToChange] = newValue
        console.log(updatedUser)
        this.setState({
            newUser: updatedUser
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editProfile(this.state.newUser);
    }

    checkPassword = () => {
        console.log("old pass "+this.state.password)
        console.log("new password "+this.state.newPassword)
        console.log("new password "+this.state.confpassword)

        if (this.state.newPassword === this.state.confpassword && (!!this.state.newPassword || !!this.state.confpassword)) {
            this.changePassword(this.state.password,this.state.newPassword);
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
    changePassword = (pw, npw) => {
        axios.post(`/adab/user/changepassword?id=${this.props.user.id}`, {
            password: pw,
            newPassword: npw
        })
            .then(response => {
                console.log("changed!")
                console.log(response)
                this.setState({
                    errors: 'Your Password Not Correct!'

                })
            })
            .catch(error => {
                console.log("Error changing password!")
                console.log(error)
            })
    }
    toggleShowA = () => {
        this.setState({
            showA: !this.state.showA
        })
    }
    iseditpicmood = (i) => {
        this.setState({
            isEditpss: i
        })
    }
    render() {
        const message = this.state.errors ?
            (
                <Toast animation={true} show={this.state.showA} onClose={this.toggleShowA} delay={3000} fade='True'
                    style={{
                        "maxWidth": "500mm"
                    }} >
                    <Toast.Header style={{ color: 'yellow' }}>
                       <h5> <strong> warning</strong></h5>
                    </Toast.Header>
                    <Toast.Body><h3><strong>{this.state.errors}</strong></h3></Toast.Body>
                </Toast>
            ) : null;

            let iseditpicmood = !this.state.isEditpss ?  <Container>
            <Form.Group>
                <TextField fullWidth type="text" name="firstName" label="First Name" placeholder="Enter your First Name" onChange={this.handleChange} value={this.state.newUser.firstName} ></TextField>
            </Form.Group>
            <Form.Group>
                <TextField fullWidth name="lastName" type="text" label="Last Name" placeholder="Enter your Last Name" onChange={this.handleChange} value={this.state.newUser.lastName}></TextField>
            </Form.Group>
            <Form.Group>
                <TextField fullWidth type="date" name="dateofBirth" placeholder="Enter your date of birth " onChange={this.handleChange} value={this.state.newUser.dateofBirth}></TextField>
            </Form.Group>
            <Form.Group>
                <TextField fullWidth type="email" name="emailAddress" label=" Email Address" placeholder="Enter your Email Address" onChange={this.handleChange} value={this.state.newUser.emailAddress}></TextField>
            </Form.Group>

            <Button className="btn" variant="primary" block onClick={this.handleSubmit}>eddit profile</Button>
            <Button className="btn" variant="primary" block  onClick={() => this.iseditpicmood(true)}>change Password</Button>

           
        </Container> :  <Container>
                {message}
                    <Form.Group>
                        <TextField
                            fullWidth
                            type="password"
                            label=" old Password"
                            name="password"
                            error={this.state.passwordfield ? true : false}
                            placeholder="Enter your new password"
                            onChange={this.changepasswordHandler}
                            variant="filled"

                        />
                        <TextField
                            fullWidth
                            type="password"
                            label=" New Password"
                            name="newPassword"
                            error={this.state.passwordfield ? true : false}
                            placeholder="Enter your new password"
                            onChange={this.changepasswordHandler}
                            variant="filled"

                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            name='confpassword'
                            error={this.state.comfpasswordfield ? true : false}
                            placeholder="Confirm your new password"
                            onChange={this.changepasswordHandler}
                            variant="filled"

                        />
                    </Form.Group>

                    <Button className="btn" variant="primary" block onClick={this.checkPassword}>change Password </Button>
                    <Button className="btn" variant="primary" block  onClick={() => this.iseditpicmood(false)}>back</Button>

                </Container>;
        return (
            <div >
               {iseditpicmood}
               
            </div>
        )
    }
}
