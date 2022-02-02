import React from "react";
import './card.scss'
import like from './Like_Button.png'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="card">
<div className="image">
    <img src={this.props.image} alt={this.props.name} />
</div>

<div className="nameandbutton">
<h3 className="name">{this.props.name}</h3>

<button onClick={()=> this.props.selectSingle(this.props.id)}>Like <img src={like} alt="like" /></button>
</div>
            </div>
         );
    }
}
 
export default Card;