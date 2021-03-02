import React, { Component } from 'react'
import "./App.css";
import axios from 'axios';

export default class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {
           idlikes : false
        }
    }
   
    togglelike = () => {
        if(this.props.islikes){
            console.log("Dislikedd");
            axios.delete(`/adab/liked/delete?qid=${this.props.quoteid}&useremail=${this.props.email.sub}`,  {
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
    else{
            console.log("likkd")
            axios.post("/adab/liked/add", {
                like : "true",
                qouteid : this.props.quoteid,
                user :  this.props.email.sub
              
            } , {
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
            <div  className={`likeButton ${this.props.isliked}`} onClick={() => this.togglelike()}>♥</div>
            </div>
        )
    }
}