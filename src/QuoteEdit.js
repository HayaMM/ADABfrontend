import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Container, Form, Button, Toast } from 'react-bootstrap'
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
                <Container>
                    <h2 className="h">Edit {this.state.newQuote.qtitle}!</h2>
                    <Form.Group>
                        <TextField fullWidth label="Quote's Title"
                            name="qtitle"
                            type="text"
                            value={this.state.newQuote.qtitle}
                            onChange={this.handleChange}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth label="Quote's Body"
                            name="qbody"
                            type="text"
                            value={this.state.newQuote.qbody}
                            onChange={this.handleChange}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth label="Quote's Writer"
                            name="qwriter"
                            type="text"
                            value={this.state.newQuote.qwriter}
                            onChange={this.handleChange}></TextField>
                    </Form.Group>
                    <Form.Group>
                        <TextField fullWidth label="Quote's Book"
                            name="qfrom"
                            type="text"
                            value={this.state.newQuote.qfrom}
                            onChange={this.handleChange}></TextField>
                    </Form.Group>

                    {/* <input type="hidden" value=""></input> */}
                    <Button className="btn" variant="primary" onClick={this.handleSubmit} type="submit" >Edit</Button>
                    <br /><br />
                </Container>
            </div>
        )
    }
}
