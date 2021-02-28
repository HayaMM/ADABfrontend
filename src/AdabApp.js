import React, { Component } from 'react'
import Home from './Home'
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./user/Register";
import Login from "./user/Login";
import axios from "axios";
import { decode } from "jsonwebtoken";
import { Alert } from "react-bootstrap";
import ResetPassword from './user/UserPassword/ResetPassword';
import FooterPage from './FooterPage'
import HeaderPage from './HeaderPage'
import Profile from './user/Profile';
export default class AdabApp extends Component {

  state = {
    isUser: false,
    user: null,
    successMessage: null,
    message: null
    }

  // is there any token into local storage or not
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = decode(token);
      if (user) {
        this.setState({
          isUser: true,
          user: user,
        });
      } else if (!user) {
        localStorage.removeItem("token");
        this.setState({
          isUser: false,
        });
      }
    }
  }

  // method for rigstration
  registerHandler = (user) => {
    axios.post("adab/user/registration", user)
      .then((response) => {
        console.log(response);
        this.setState({
          isUser: true,
          user: user,
          successMessage: "Successfully registeration ",
          message: null
        });
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
          console.log(user)
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
  // log out method
  onLogoutHandler = () => {
    localStorage.removeItem("token");
    this.setState({
      isUser: false,
      user: null,
    });
  };

  render() {
    const { isUser } = this.state;

    // to show message alert..
    const message = this.state.message ? (
      <Alert role="alert" variant="danger">{this.state.message}</Alert>
    ) : null;
    const successMessage = this.state.successMessage ? (
      <Alert variant="success">{this.state.successMessage}</Alert>
    ) : null;
    return (
      <Router>
        <HeaderPage />
        <nav>
          {message} {successMessage} {isUser ? (
            <div>

              <Link to="/logout" onClick={this.onLogoutHandler}>Logout </Link>{" "}
            </div>
          ) : (
              <div>
                <Link to="/register">Register</Link> {' '}
                <Link to="/login">Login</Link> {' '}
              </div>
            )}
        </nav>
        <div>
          <Route path="/register" component={() => <Register register={this.registerHandler} />}></Route>
          {/* <Route path="/login" component={() => isUser ? <Home /> : <Login login={this.loginHandler} />}></Route> */}
          <Route path="/resetpassword" component={() => <ResetPassword />}></Route>
          <Route path="/profile" component={() => <Profile profile={this.state.user.sub}/>}></Route>
          {/* <Route path="/register" component={() => <Register register={this.registerHandler} name="userRole" value="ROLE_USER" />}></Route> */}
          <Route path="/login" component={() => isUser ? <Home user={this.state.user} /> : <Login login={this.loginHandler} />}></Route>
          
          <Route path="/resetpassword" component={() => <ResetPassword />}></Route>      
        </div>
        <FooterPage />
      </Router>
    )
  }
}

