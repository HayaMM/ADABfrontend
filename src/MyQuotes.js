import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Likes from './Likes';
import axios from 'axios';


export default class MyQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.liked,
            likes: 0,
            islikes : false

        }
    }
    componentDidMount() {
        this.getlike();
    }
    getlike = () => {
        axios.get(`/adab//liked/islike?useremail=${this.props.email}&qouteid=${this.props.id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }
        ).then(response => {
            console.log(this.props.email+"likes iiiiiiii" + response.data )
            this.setState({
                islikes: response.data
            })

        })
            .catch(error => {
                console.log("Error returning likes!!");
                console.log(error);
            })
            axios.get(`/adab/quote/detail?id=${this.props.id}`, {
                headers : {
                    "Authorization": "Bearer " + localStorage.getItem("token")
               }
            }
                ).then(response => {
                    console.log("likes" + response.data.qreivew)
                    this.setState({
                        likes: response.data.qreivew
                    })
                    
                })
                .catch(error => {
                    console.log("Error returning likes!!");
                    console.log(error);
                })
            
    }
    render() {

        const isliked = this.state.islikes ? "liked" : null;
        return (
            <div className="stdiv ">
                <div className="h box">
                    <div className="body">
                    Quote's title:&nbsp; <b> {this.props.qtitle}  </b><br />  <br />
                    <b>  《 &nbsp;  {this.props.qbody}  &nbsp;  》</b>
                    <br /> <br />&nbsp; ــــــ {this.props.qfrom}
              &nbsp; By {this.props.qwriter}
                    <br /><br />
                  User: {this.props.user.firstName} {this.props.user.lastName}
                  </div>
                  <div className="downbody">
                <Likes email={this.props.email} quoteid={this.props.id} islikes={this.state.islikes} loadQuote={this.props.loadQuote} isliked={isliked}></Likes>
                {this.state.likes} Likes
                </div>
                <hr />
                </div>

            </div>
        )
    }
}
