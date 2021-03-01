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
            <div className="h">

                <h2 className="h">Edit {this.state.newQuote.qtitle}!</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Quote's Title</label>&nbsp;
                        <input
                            name="qtitle"
                            type="text"
                            value={this.state.newQuote.qtitle}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Quote's Body</label>&nbsp;
                        <input
                            name="qbody"
                            type="text"
                            value={this.state.newQuote.qbody}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Quote's Writer</label>&nbsp;
                        <input
                            name="qwriter"
                            type="text"
                            value={this.state.newQuote.qwriter}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Book's name</label>&nbsp;
                        <input
                            name="qfrom"
                            type="text"
                            value={this.state.newQuote.qfrom}
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        {/* <input type="hidden" value=""></input> */}
                        <input className="btn" variant="primary" type="submit" value="Edit this Quote"></input>

                    </div>
                </form>
            </div>
        )
    }
}
