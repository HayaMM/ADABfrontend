import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

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
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props.user.sub)
        this.props.addQuote(this.state.newQuote);

    }
    render() {
        return (
            <div>
                <Container >
                    <Form.Group >
                        <h2 className="h">Add New Quote</h2>

                        <TextField
                            label="Quote Title"
                            name="qtitle"
                            type="text"
                            fullWidth
                            variant="filled"
                            placeholder="Enter Quote Title"
                            onChange={this.handleChange}></TextField>

                        <TextField
                            labe="Quote Body"
                            name="qbody"
                            type="text"
                            fullWidth
                            variant="filled"
                            placeholder="Enter Quote Body"
                            onChange={this.handleChange}></TextField>

                        <TextField
                            label="Quote's Writer"
                            name="qwriter"
                            type="text"
                            fullWidth
                            variant="filled"
                            placeholder="Enter Quote's Writer"
                            onChange={this.handleChange}></TextField>

                        <TextField
                            label="Book's Name"
                            name="qfrom"
                            type="text"
                            fullWidth
                            variant="filled"
                            placeholder="Enter Book's Name"
                            onChange={this.handleChange}></TextField>
                        <br />   <br />
                        <Button type="submit" onClick={this.handleSubmit}>Add this Quote</Button>

                    </Form.Group>
                </Container>
            </div>
        )
    }
}
