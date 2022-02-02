import React from 'react'
import SingleCharacterCard from '../../Components/SingleCharacterCard/SingleCharacterCard.jsx'
import './singlepage.scss'



class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 

<div className='singlepage'>
    <div className="gohomepickle" onClick={()=>this.props.gotoHomepage()}></div>
    <SingleCharacterCard species={this.props.data.species} status={this.props.data.status} name={this.props.data.name} image={this.props.data.image} origin={this.props.data.origin.name}/>
</div>

         );
    }
}
 
export default SinglePage;