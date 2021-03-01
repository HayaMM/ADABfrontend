import React, { Component } from 'react'
import MyQuotes from './MyQuotes';
import axios from 'axios';
export default class AllQoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // liked: '',
            search: '',
            quotes: props.quotes
        }
    }
    dynamicSearch = () => {
        return this.state.quotes.filter(quote => {
            return quote.qtitle.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }
    editSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    // changePassword = (pw, npw) => {
    //     axios.post(`/adab/user/changepassword?id=${this.props.user.id}`, {
    //         password: pw,
    //         newPassword: npw
    //     })
    // addLike = () => {
    //     axios.post("/adab/liked/add", liked, {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     })
    //         .then(response => {
    //             console.log("like dded!!")
    //             this.setState({
    //                 liked: true
    //             })
    //             this.loadQuote();
    //         })
    //         .catch(error => {
    //             console.log("Error adding like!!");
    //             console.log(error)
    //         })
    // }
    render() {
        return (
            <div>  <input type="text" value={this.state.search} onChange={this.editSearch} placeholder="Search ..." />
                {this.dynamicSearch().map((quote, index) =>
                    <div key={index}>
                        <MyQuotes {...quote} />
                    </div>)}
            </div>
        )
    }
}
