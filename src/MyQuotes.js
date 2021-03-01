import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class MyQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.liked
        }
    }
    render() {
        return (
            <div className="stdiv">
                <p className="h">
                    Quote's title:&nbsp; <b> {this.props.qtitle}  </b><br />  <br />
                    <b>  《 &nbsp;  {this.props.qbody}  &nbsp;  》</b>
                    <br /> <br />&nbsp; ــــــ {this.props.qfrom}
              &nbsp; By {this.props.qwriter}
                    <hr />
                    <br /><br /><Button >Like </Button>
                    <br /><br /><Button >DisLike </Button>
                </p>
            </div>
        )
    }
}
