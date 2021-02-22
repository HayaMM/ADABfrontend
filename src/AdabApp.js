import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./user/Register";
import Login from "./user/Login";
import axios from "axios";

export default class AdabApp extends Component {

  state={
    isUser: false,
    user:null,
    message:null
  }
  // method for rigstration
  registerHandler = (user) => {
    axios.post("adab/user/registration", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Router>
        <nav>
            <div>
              <Link to="/register">Register</Link> {' '}
              <Link to="/login">Login</Link> {' '}
            </div>
        </nav>
        <div>
<Route path="/register" component={() => <Register register={this.registerHandler} />}></Route>
          <Route path="/login" component={Login}></Route>
        </div>
    </Router>
    )
  }
}
