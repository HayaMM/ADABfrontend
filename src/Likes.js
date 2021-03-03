import React, { Component } from 'react'
import "./App.css";
import axios from 'axios';
import { Button } from 'react-bootstrap'
export default class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idlikes: false
        }
    }
   
    togglelike = () => {
        if (this.props.islikes) {
            axios.delete(`${this.props.url}/liked/delete?qid=${this.props.quoteid}&useremail=${this.props.email}`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
                .then(response => {
                    console.log("quote dis liked" + response)
                    this.setState({
                        idlikes: response.data
                    })

                })
                .catch(error => {
                    console.log("Error dis liking quote!!");
                    console.log(error);
                })
        }
        else {
            axios.post(`${this.props.url}/liked/add`, {
                like: "true",
                qouteid: this.props.quoteid,
                user: this.props.email

            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
                .then(response => {
                    console.log("quote liked" + response)
                    this.setState({
                        idlikes: response.data
                    })

                })
                .catch(error => {
                    console.log("Error liking quote!!");
                    console.log(error);
                })
        }
        this.props.loadQuote();
    }
    render() {
        console.log("what button "+this.props.isliked)
        return (

            <div>
          <br /><br />
            <div  className={`likeButton ${this.props.isliked}`} onClick={() => this.togglelike()}>♥</div>

            </div>
        )
    }
}