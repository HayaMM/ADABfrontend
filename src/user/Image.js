import React, { Component } from 'react'
import "./UserPassword/Forms.css";

export default class Image extends Component {
    render() {
        return (
            <div >
                <img className="profileimg" src={`data:image/jpg;base64,${this.props.image}`} alt="profile picture" ></img>
            </div>
        )
    }
}
