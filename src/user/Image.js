import React, { Component } from 'react'
import "./UserPassword/Forms.css";
import Images from './img/userpicdefult.jpg';
import { Form, Container, Button } from 'react-bootstrap'
import axios from "axios";
import "./UserPassword/Forms.css";


export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditpic: false,
            thefile: ''
        }
    }
    changeHandler = (e) => {
        let temp = { ...this.state }
        temp[e.target.name] = e.target.files[0];
        this.setState(temp)
        // console.log("here  " + e.target.files[0])
        this.setState({
            thefile: e.target.files[0]
        })
        console.log("changeHandler " + this.state.thefile)

    }
    clicked = () => {
        console.log("clicked img " + this.state.thefile)
        const formData = new FormData();
        formData.append("file", this.state.thefile);

        axios.post(`${this.props.url}adab/user/image/fileupload?id=${this.props.id}`, formData ,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("pic added!")
                console.log(response)
                this.iseditpicmood(false);
                this.props.loadUserProfile();
            })
            .catch(error => {
                console.log("Error adding picture!")
                console.log(error)
            })

    }
    iseditpicmood = (is) => {
        this.setState({
            isEditpic: is
        })
    }
    render() {
        let isimg = this.props.theimage ? `data:image/jpg;base64,${this.props.theimage}` : Images;

        let iseditpicmood = !this.state.isEditpic ? <img className="profileimg" src={isimg} alt="profile picture" onClick={() => this.iseditpicmood(true)} ></img> :
            <Container className='popup'>
                <Form.Group encType="multipart/form-data" className='popup_inner' >
                    <input type="file"
                        name="file"
                        label="Upload Image"
                        onChange={this.changeHandler}
                        encType="multipart/form-data"
                    />
                    <Button className="smlbtn"onClick={() => this.clicked()}>add</Button>
                    <br />   <br />
                    <Button className="smlbtn" onClick={() => this.iseditpicmood(false)}>back</Button>
                </Form.Group>
            </Container>
            ;
        return (
            <div className='app'>
                {iseditpicmood}
            </div>
        )
    }
}
