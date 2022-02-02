import React from "react";
import './singlecharactercard.scss'


class SingleCharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="singlecharactercard">
                <h1 className="name">{this.props.name}</h1>
                <div className="image"><img src={this.props.image} alt={this.props.name} /></div>
             <div className="data">
               <div className="dataitem"><b>Species: </b> {this.props.species}</div>
                <div className="dataitem"><b>Origin: </b> {this.props.origin}</div>
                <div className="dataitem"><b>Status: </b> {this.props.status}</div>
            </div>
            </div>
         );
    }
}
 
export default SingleCharacterCard;