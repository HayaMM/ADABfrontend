import React, { Component } from 'react'
import "./Home.css";
import axios from 'axios';
import { Toast } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MyQuotes from './MyQuotes';
import NewQuote from './NewQuote';
import QuoteEdit from './QuoteEdit'
import Profile from './user/Profile';
import ListQuote from './ListQuote'
import UsersList from './user/UsersList'
import AllQoutes from './AllQoutes';
import Video from './Video'
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            isEdit: false,
            clickedQuoteId: '',
            clickedUserId: '',
            isSwitch: false,
            successMessageaddqoute: null,
            ishome: false,
            showA: true
        }
    }

    componentDidMount() {
        this.loadQuote();
    }
    loadQuote = () => {
        axios.get("/adab/quote/index")
            .then(response => {
                console.log("quotes from load" + response)
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
        axios.post(`/adab/quote/add?User=${this.props.user.sub}`, quote, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Quote dded!!")
                this.setState({
                    successMessageaddqoute: "The Qoute added Successfully"
                })
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
    editView = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            clickedQuoteId: id
        })
    }
    editQuote = (quote) => {
        axios.put("/adab/quote/edit", quote, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Quote edited!!")
                this.loadQuote();
            })
            .catch(error => {
                console.log("Error edit qoute!!")
                console.log(error)
            })
    }
    switch = (value) => {
        this.setState({
            isSwitch: value
        })
    }

    toggleShowA = () => {
        this.setState({
            showA: !this.state.showA
        })
    }
    render() {

        console.log("quotes " + this.state.quotes)
        const message = this.state.successMessageaddqoute ? (
            <Toast animation={true} show={this.state.showA} onClose={this.toggleShowA} delay={3000} fade='True'
                style={{
                    "maxWidth": "500mm"
                }} >
                <Toast.Header style={{ color: '#7FFFD4' }}>
                    <h3> <strong> {this.state.successMessageaddqoute}</strong></h3>
                </Toast.Header>
            </Toast>
        ) : null;
        return (
            <div>
                {message}
                <Router>

                    <div className="menu">
                        <div className="label">Main Menu</div>
                        <div className="spacer"></div>
                        {/* <div className="item"><span ><Link to="/addquote" style={{ color: 'inherit', textDecoration: 'none' }}>Add Quote</Link></span></div> */}
                        <div className="item"><span><Link to="/myquote" style={{ color: 'inherit', textDecoration: 'none' }}>My Quote</Link></span></div>
                        <div className="item"><span ><Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>Profile</Link></span></div>
                        <div className="item"><span ><Link to="/quotes" style={{ color: 'inherit', textDecoration: 'none' }}>All Quote</Link></span></div>
                        <div className="item"><span><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About ADAB</Link></span></div>
                        {"Welcome " + this.props.user.sub} {"  "}
                    </div>
                    <div>
                        {/* <Route exact path="/" component={Home}></Route> */}
                        {/* <Route path="/addquote" component={() => <NewQuote user={this.props.user} addQuote={this.addQuote} />}></Route> */}
                        <Route path="/myquote" component={() => <ListQuote user={this.props.user} addQuote={this.addQuote} deleteQuote={this.deleteQuote} isEdit={this.state.isEdit} clickedQuoteId={this.state.clickedQuoteId} editView={this.editView} editQuote={this.editQuote} email={this.props.user}
                        />}></Route>
                        <Route path="/profile" component={() => <Profile profile={this.props.user} />}></Route>
                        <Route path="/alluser" component={() => <UsersList userEmail={this.props.user.sub} />}></Route>

                        <Route path="/quotes" component={() => <AllQoutes quotes={this.state.quotes} clickedQuoteId={this.state.clickedQuoteId} email={this.props.user} loadQuote={this.loadQuote} />}></Route>
                        <Route path="/about" component={() => <Video />}></Route>



                        {/* <Route path="/editquote" component={() => <EditQuote editQuote={this.editQuote} />}></Route> */}


                    </div>
                </Router>
            </div>
        )
    }
}
