import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quote from './Quote';
import NewQuote from './NewQuote';
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
                console.log("quotes " + response)
                this.setState({
                    quotes: response.data
                })
            })
            .catch(error => {
                console.log("Error returning quotes!!");
                console.log(error);
            })
    }
    addQuote = (quote) => {
        axios.post("/adab/quote/add", quote)
            .then(response => {
                console.log("Quote dded!!")
                this.loadQuote();
            })
            .catch(error => {
                console.log("Error adding quote!!");
                console.log(error)
            })
    }
    deleteQuote = (id) => {
        axios.delete(`/adab/quote/delete?id=${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Quote deleted!!")
                this.loadQuote();
            })
            .catch(error => {
                console.log("Error deleting quote!!")
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Router>
                    <nav>
                        {/* <Link to="/">Home</Link>{' '} */}
                        <Link to="/addquote">Add Quote</Link> {' '}
                    </nav>
                    <div>
                        {/* <Route exact path="/" component={Home}></Route> */}
                        <Route path="/addquote" component={() => <NewQuote addQuote={this.addQuote} />}></Route>
                    </div>
                </Router>


                <h2>All Quotes</h2>
                {this.state.quotes.map((quote, index) =>
                    <div key={index}>
                        <Quote {...quote} deleteQuote={this.deleteQuote} />
                    </div>)}
            </div>
        )
    }
}
