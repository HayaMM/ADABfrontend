import React, { Component } from 'react'
import Likes from './Likes';
import axios from 'axios';

export default class AllQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            islikes : false
        }
    }
    componentDidMount() {
        this.getlike();
    }
    getlike = () => {
        axios.get(`/adab//liked/islike?useremail=${this.props.email.sub}&qouteid=${this.props.id}`, {
            headers : {
                "Authorization": "Bearer " + localStorage.getItem("token")
           }
        }
            ).then(response => {
                console.log("likes" + response)
                this.setState({
                    islikes: response.data
                })
                
            })
            .catch(error => {
                console.log("Error returning likes!!");
                console.log(error);
            })
    }
    render() {

        const isliked = this.state.islikes ? <div>liked</div> : <div>not liked</div>;
        return (
            <div className="stdiv">
              Quote's title: {this.props.qtitle}  <br />  <br/>
              《 &nbsp;  {this.props.qbody}  &nbsp;  》
              <br /> <br/>&nbsp; ــــــ {this.props.qfrom} 
              &nbsp; By {this.props.qwriter}
                <br />
                <Likes email={this.props.email} quoteid={this.props.id} islikes={this.state.islikes}></Likes>
                <br /><br />
                {this.props.qreivew}
                {isliked}
                <hr />

            </div>
        )
    }
}
