import React, { Component } from 'react'
import axios from 'axios';
import Quote from './Quote';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        }
    }
    componentDidMount() {
        this.loadQuote();
    }
    loadQuote = () => {
        axios.get("/adab/quote/index")
            .then(response => {
                console.log(response)
                this.setState({
                    quotes: response.data
                })
            })
            .catch(error => {
                console.log("Error returning quotes !!");
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h2>All Quotes</h2>
                {this.state.quotes.map((quote, index) =>
                    <div key={index}>
                        <Quote {...quote} />
                    </div>)}
            </div>
        )
    }
}
