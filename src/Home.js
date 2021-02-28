import React, { Component } from 'react'
import "./Home.css";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quote from './Quote';
import NewQuote from './NewQuote';
import QuoteEdit from './QuoteEdit'
import Profile from './user/Profile';
import ListQuote from './ListQuote'
import UsersList from './user/UsersList'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            isEdit: false,
            clickedQuoteId: '',
            clickedUserId: '',

            // search: ""
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

    render() {
        console.log("quotes " + this.state.quotes)
        // const { search } = this.state;
        //let quotesListFilter(quote => {
        //     return quote.qtitle.toLowerCase().indexof(search.toLowerCase()) !== -1
        // })
        // const [searchTerm, setSearchTerm] = useState("");
        return (
            <div>

                <Router>

                    <div className="menu">
                        <div className="label">Main Menu</div>
                        <div className="spacer"></div>
                        <div className="item"><span><Link to="/addquote" style={{ color: 'inherit', textDecoration: 'none' }}>Add Quote</Link></span></div>
                        <div className="item"><span><Link to="/allquote" style={{ color: 'inherit', textDecoration: 'none' }}>All Quote</Link></span></div>
                        <div className="item"><span><Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>Profile</Link></span></div>
                        <div className="item"><span><Link to="/alluser" style={{ color: 'inherit', textDecoration: 'none' }}>All account</Link></span></div>
                        <div className="item"><span>MixCloud</span></div>
                        {"Welcome " + this.props.user.sub} {"  "}
                    </div>
                    <div>
                        {/* <Route exact path="/" component={Home}></Route> */}
                        <Route path="/addquote" component={() => <NewQuote user={this.props.user} addQuote={this.addQuote} />}></Route>
                        <Route path="/allquote" component={() => <ListQuote loadQuote={this.loadQuote} deleteQuote={this.deleteQuote} isEdit={this.state.isEdit} clickedQuoteId={this.state.clickedQuoteId} editView={this.editView} editQuote={this.editQuote} quotes={this.state.quotes} />}></Route>
                        <Route path="/profile" component={() => <Profile profile={this.props.user} />}></Route>
                        <Route path="/alluser" component={() => <UsersList/>}></Route>

                        {/* <Route path="/editquote" component={() => <EditQuote editQuote={this.editQuote} />}></Route> */}


                    </div>
                </Router>

                {/* <input type="text" placeholder="Search ..." onChange={(event) => { searchTerm(event.target.value) }} /> */}
                {/* <h2>All Quotes</h2>
                {this.state.quotes.map((quote, index) =>
                    <div key={index}>
                        <Quote {...quote} deleteQuote={this.deleteQuote} editView={this.editView} />
                        {(this.state.isEdit && this.state.clickedQuoteId === quote.id) ? <QuoteEdit quote={quote} editQuote={this.editQuote} /> : null}

                    </div>)}
                    {/* <div>
                        <Profile {...user} editView={this.editView} />
                        {(this.state.isEdit && this.state.clickedUserId === user.id) ? <QuoteEdit user={user} editUser={this.editUser} /> : null}
                    </div> 
                    </div>)} */}

            </div>
        )
    }
}
