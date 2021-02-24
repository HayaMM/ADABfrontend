import React, { Component } from 'react'
import Quote from "./Quote";
export default class ListQuote extends Component {
    render() {
        return (
            <div>
                <h2>All Quotes</h2>
                {this.props.quotes.map((quote, index) =>
                    <div key={index}>
                        <Quote {...quote} />

                    </div>)}
            </div>
        )
    }
}
