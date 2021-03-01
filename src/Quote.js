import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
export default class Quote extends Component {
    render() {
        return (
            <div className="stdiv">
                <p className="h">Quote's title:&nbsp;<b>{this.props.qtitle}</b>    <br />  <br />
                    <b> 《 &nbsp;  {this.props.qbody}  &nbsp;  》</b>
                    <br /> <br />&nbsp; ــــــ {this.props.qfrom}
              &nbsp; By {this.props.qwriter}
                    <br /><br />
                    <hr />
                    <Button className="btn" variant="primary" onClick={() => { this.props.deleteQuote(this.props.id) }}>Delete "{this.props.qtitle}"</Button>
                    <br />   <br />
                    <Button className="btn" variant="primary" onClick={() => { this.props.editView(this.props.id) }}>Edit "{this.props.qtitle}"</Button>
                </p>
            </div>
        )
    }
}
