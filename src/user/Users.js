import React, { Component } from 'react'
import Images from './img/userpicdefult.jpg';
import UsersAccount from './UsersAccount'
import { Button } from 'react-bootstrap'


export default class Users extends Component {
    state = {
        Role: this.props.userRole,
        user: [],
        isseemore: false
    }

    onclickdetalis = () => {
        this.setState({
            isseemore: !this.state.isseemore
        })
    }
    render() {
        let isimg = this.props.image ? `data:image/jpg;base64,${this.props.theimage}` : Images;

        const admin = (this.props.isUserRole) ? <div>
            {(this.state.Role === "ROLE_USER") ? <Button className="smlbtn" onClick={() => { this.props.deleteAccount(this.props.id) }}>Delete account</Button> : null}</div> : null;
        <br />
        const isseemore = this.state.isseemore ? <UsersAccount user={this.props} onclickdetalis={this.onclickdetalis} userEmail={this.props.userEmail} url={this.props.url} loadQuote={this.loadQuote} theimage={this.props.theimage} image={this.props.image}></UsersAccount> :
            <div>
                {admin}
                <b><div className="h"><h4>{this.props.firstName} {this.props.lastName}</h4></div><img className="profileimg profile" src={isimg} alt="profile picture"  ></img></b><br />

                <br />       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <Button onClick={() => this.onclickdetalis()}>See more</Button>


            </div>;


        return (
            <div className="stdiv">

                {isseemore}


            </div>
        )
    }
}
