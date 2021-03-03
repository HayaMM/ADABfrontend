import React, { Component } from 'react'
import Images from './img/userpicdefult.jpg';
import { Form, Container, Button } from 'react-bootstrap'
import axios from 'axios';
import MyQuotes from '../MyQuotes';

export default class UsersAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isviewqoute: false,
            quotes: []
        }
    }
    loaduserQuote = () => {
        axios.get(`/adab/user/indexquote?emailAddress=${this.props.user.emailAddress}`)
            .then(response => {
                console.log("quotes from load" + response)
                this.setState({
                    quotes: response.data
                })
            })
            .catch(error => {
                console.log("Error returning quotes!!");
                console.log(error);
            })
    }
    viewqoute = () => {
        console.log("click view")
        this.loaduserQuote();
        console.log("heerre " + this.state.quotes);
    }
    isviewqoutemood = (is) => {
        this.setState({
            isviewqoute: is
        })
        this.viewqoute();
    }
    render() {
        let isimg = this.props.image ? `data:image/jpg;base64,${this.props.theimage}` : Images;
        const isqoute = this.state.isviewqoute ?
            <div className='popup'>
                <div className='popup_inner q' >

                    {this.state.quotes.map((quote, index) =>
                        <div key={index}>
                            <MyQuotes  {...quote} id={quote.id} email={this.props.userEmail} loadQuote={this.loaduserQuote} />
                        </div>)}
                    <Button onClick={() => this.isviewqoutemood(false)}>Back</Button>
                </div>
            </div> : null;
        return (

            <div>
                <div className="stdiv">
                    <div className="h">
                        <h2 className="h">{this.props.user.firstName} Information</h2>
          Name:  <b>{this.props.user.firstName} {this.props.user.lastName}</b><br />
          Date Of Birth:<b> {this.props.user.dateofBirth}</b><br />
          profile image :   <br /> <br /> <img className="profileimg profile" src={isimg} alt="profile picture"  ></img>
                        <div><br />
                            <Button onClick={() => this.isviewqoutemood(true)}>View Quotes</Button>&nbsp;
                            <Button onClick={() => this.props.onclickdetalis()}>Back to Users</Button>
                        </div>
                    </div>
                </div>
                {isqoute}
            </div>
        )
    }
}
