import React from 'react';
import Pagination from '../../Components/Pagination/Pagination.jsx'
import Card from '../../Components/Card/Card.jsx'
import image from './p421kyko86py.png'
import "./homepage.scss"

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
    
        return ( 
<div className='homepage'>
 <div className='headerimage'><img src={image} alt='Header '></img></div>
    <Pagination selectPage={this.props.selectPage} currentPage={this.props.currentPage} changePage={this.props.changePage}/>
<div className='cardwrap'>{this.props.data.map((e)=><Card key={e.id} selectSingle={this.props.selectSingle} name={e.name} image={e.image} id={e.id}/>)}</div>
<a href='#top'>Go to top</a>

</div>

         );
    }
}
 
export default Homepage;