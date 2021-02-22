import React, { Component } from 'react'

export default class NewQuote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newQuote: {}
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
    // handleSubmit = (event) => {
    //     event.preventDefault()

    //     this.props.addQuote(this.state.newQuote);
    // }
    render() {
        return (
            <div>
                <h1>Add New Quote</h1>
                <form>
                    <div>
                        <label>Quote Title</label>
                        <input
                            name="qtitle"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Quote Body</label>
                        <input
                            name="qbody"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Quote's Writer</label>
                        <input
                            name="qwriter"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Book's name</label>
                        <input
                            name="qfrom"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Total of likes</label>
                        <input
                            name="qreivew"
                            type="number"
                            onChange={this.handleChange}></input>
                    </div>

                    <div>
                        <input type="submit" value="Add this Quote"></input>
                    </div>
                </form>
            </div>
        )
    }
}
