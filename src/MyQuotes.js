import React, { Component } from 'react'

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
              Quote's title: {this.props.qtitle}  <br />  <br/>
              《 &nbsp;  {this.props.qbody}  &nbsp;  》
              <br /> <br/>&nbsp; ــــــ {this.props.qfrom} 
              &nbsp; By {this.props.qwriter}
                <br /><button >Like it</button>
                <br /><br />
                <hr />

            </div>
        )
    }
}
