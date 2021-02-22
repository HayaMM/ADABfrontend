import React, { Component } from 'react'
import Home from './Home'
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./user/Register";
import Login from "./user/Login";
import axios from "axios";
import { decode } from "jsonwebtoken";

export default class AdabApp extends Component {

  state={
    isUser: false,
    user:null,
    successMessage:null,
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

  // method for login 
  loginHandler = (user) => {
    axios.post("adab/user/authenticate", user)
    .then((response) => {
      console.log(response);
      console.log(response.data.token);
      //we will be needing this token to send with each and every request that
      // needs to be authenticated  and we want to turn it programmatically automatically
      if (response.data.token != null) {
        localStorage.setItem("token", response.data.token);
        let user = decode(response.data.token);
        this.setState({
          isUser: true,
          user: user,
          successMessage: "Successfully logged in ",
          message: null
        });
      } else {
        this.setState({
          isUser: false,
          user: null,
          message: "Incorrect username or password, try agin",
        });
      }
    })
      .catch((error) => {
        console.log(error);
        this.setState({
          isUser: false,
          message: "Error Occured. Please try again later!!!",
      });
    });
  };

  render() {
    return (
      <Router>
        <nav>
            <div>
              <Link to="/register">Register</Link> {' '}
              <Link to="/login">Login</Link> {' '}
              <Home></Home>
            </div>
        </nav>
        <div>
<Route path="/register" component={() => <Register register={this.registerHandler} name="userRole" value="ROLE_USER" />}></Route>
<Route path="/login" component={() => <Login login={this.loginHandler} />}
          ></Route>
        </div>
    </Router>
    )
  }
}

