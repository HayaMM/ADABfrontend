import React, { Component } from 'react'
import MyQuotes from './MyQuotes';

export default class AllQoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            quotess: props.quotes,
            pop : props.pop
        }
    }
   
    dynamicSearch = () => {
        console.log("---" + this.state.quotess)
        return this.state.quotess.filter(quote => {
            return quote.qtitle.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }
    editSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        const ispop = this.state.pop ?   <div>
        <h2 className="h">popular Quotes</h2>
        <div className="listing" >
        {this.state.quotess.sort(function(a,b){
    return parseInt(a.qreivew)  - parseInt(b.qreivew);
   }).reverse().map((quote, index) =>
            <div key={index}>
               <MyQuotes  {...quote } email={this.props.email.sub} loadQuote={this.props.loadQuote} />
            </div>)}
            </div>
    </div>:  
        <div>
        <h2 className="h">All Quotes</h2>
        <input className="searchbar" type="text" value={this.state.search} onChange={this.editSearch} placeholder="Search ..." />
        <div className="listing" >
        {this.dynamicSearch().map((quote, index) =>
          <div key={index} >
                <MyQuotes  {...quote } email={this.props.email.sub} loadQuote={this.props.loadQuote} />
                <br />
            </div>
            )}
            </div>
           
    </div>
        return (


            <div>
              {ispop}
                   
            </div>

        )
    }
}
