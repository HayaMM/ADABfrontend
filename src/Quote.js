import React, { Component } from 'react'

export default class Quote extends Component {
    render() {
        return (
            <div className="stdiv">
              Quote's title: {this.props.qtitle}  <br />  <br/>
              《 &nbsp;  {this.props.qbody}  &nbsp;  》
              <br /> <br/>&nbsp; ــــــ {this.props.qfrom} 
              &nbsp; By {this.props.qwriter}
                <br /><br />
                <hr />
                <button onClick={() => { this.props.deleteQuote(this.props.id) }}>Delete "{this.props.qtitle}"</button>
                &nbsp;
                <button onClick={() => { this.props.editView(this.props.id) }}>Edit "{this.props.qtitle}"</button>
                
            </div>
        )
    }
}
