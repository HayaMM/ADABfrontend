import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

export default class Password extends Component {
    render() {
        return (
            <Router>

                <nav>
                    <Link to="/ForgotPassword" >Forgot Password?</Link>
                </nav>
                <div>
                    <Route path="/ForgotPassword" component={() => <ForgotPassword />}></Route>
                    
                </div>
              
            </Router>
        )
    }
}
