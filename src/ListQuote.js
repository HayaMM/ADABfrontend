import React, { Component } from 'react'
import Quote from "./Quote";
import QuoteEdit from './QuoteEdit'
import axios from 'axios';
import NewQuote from './NewQuote'
export default class ListQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            search: ''
        }
    }
    dynamicSearch = () => {
        console.log("---" + this.state.quotes)
        return this.state.quotes.filter(quote => {
            return quote.qtitle.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }
    editSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    componentDidMount() {
        this.loaduserQuote();
    }
    loaduserQuote = () => {
        console.log(this.props.email.sub)
        axios.get(`/adab/user/indexquote?emailAddress=${this.props.email.sub}`,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
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
   

    render() {
        console.log(this.state.quotes + "from list")
       
    
        return (
            <div>
                <NewQuote user={this.props.user} addQuote={this.props.addQuote} />
                <h2 className="h">My Quotes</h2>
                <input className="searchbar" type="text" value={this.state.search} onChange={this.editSearch} placeholder="Search ..." />
                <br /><br />
                {this.dynamicSearch().map((quote, index) =>
                    <div key={index}>
                        <Quote {...quote} deleteQuote={this.props.deleteQuote} editView={this.props.editView} />
                        {(this.props.isEdit && this.props.clickedQuoteId === quote.id) ? <QuoteEdit quote={quote} editQuote={this.props.editQuote} /> : null}
                    </div>)}

            </div>
        )
    }
}
