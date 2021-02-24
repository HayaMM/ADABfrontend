import React, { Component } from 'react'

export default class QuoteEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newQuote: props.quote
        }
    }
    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const updatedQuote = { ...this.state.newQuote }
        updatedQuote[attributeToChange] = newValue
        console.log(updatedQuote)
        this.setState({ newQuote: updatedQuote })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editQuote(this.state.newQuote);
    }
    render() {
        return (
            <div>
                <h1>Edit {this.state.newQuote.qtitle}!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Quote Title</label>
                        <input
                            name="qtitle"
                            type="text"
                            value={this.state.newQuote.qtitle}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Quote Body</label>
                        <input
                            name="qbody"
                            type="text"
                            value={this.state.newQuote.qbody}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Quote's Writer</label>
                        <input
                            name="qwriter"
                            type="text"
                            value={this.state.newQuote.qwriter}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Book's name</label>
                        <input
                            name="qfrom"
                            type="text"
                            value={this.state.newQuote.qfrom}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <input type="submit" value="Edit this Quote"></input>
                    </div>
                </form>
            </div>
        )
    }
}
