import React, { Component } from 'react'

export default class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: ''
        }
    }
    render() {
        return (
            <div>
              Quote's title: {this.props.qtitle}  <br />  
              《 &nbsp;  {this.props.qbody}  &nbsp;  》
              <br />&nbsp; ــــــ {this.props.qfrom} <br />
               By {this.props.qwriter}
                <br /><button>Like it</button>
                <br /><br />
                <button onClick={() => { this.props.deleteQuote(this.props.id) }}>Delete "{this.props.qtitle}"</button>
                &nbsp;
                <button onClick={() => { this.props.editView(this.props.id) }}>Edit "{this.props.qtitle}"</button>
                <hr />
            </div>
        )
    }
}
