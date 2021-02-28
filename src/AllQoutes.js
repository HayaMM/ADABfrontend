import React, { Component } from 'react'
import MyQuotes from './MyQuotes';

export default class AllQoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
