import React, { Component } from 'react'
import Quote from "./Quote";
import QuoteEdit from './QuoteEdit'
export default class ListQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: props.quotes

        }
    }
    // componentDidMount() {
    //     this.props.loadQuote();
    // }
    render() {
        console.log(this.state.quotes + "from list")
        return (
            <div>
                <h2>All Quotes</h2>
                {this.state.quotes.map((quote, index) =>
                    <div key={index}>
                        <Quote {...quote} deleteQuote={this.props.deleteQuote} editView={this.props.editView} />
                        {(this.props.isEdit && this.props.clickedQuoteId === quote.id) ? <QuoteEdit quote={quote} editQuote={this.props.editQuote} /> : null}
                    </div>)}

            </div>
        )
    }
}
