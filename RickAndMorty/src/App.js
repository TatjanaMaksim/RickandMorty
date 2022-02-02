import React from "react";
import Homepage from './Pages/Homepage/Homepage.jsx'
import SinglePage from './Pages/SinglePage/SinglePage.jsx'
import './app.css'


class App extends React.Component {
  constructor(props) {
    super(props);
   this.changePage=this.changePage.bind(this)
    this.selectSingleCharacter=this.selectSingleCharacter.bind(this)
 this.selectPage=this.selectPage.bind(this)
 this.gotoHomepage=this.gotoHomepage.bind(this)
    this.state = { 

data:[],
selectedChar:null,
currentPage:1

     }
  }

fetchData(){
 fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.currentPage}`)
.then(res=>res.json())
.then(res=>this.setState({data:res.results}))

}


componentDidMount(){
 this.fetchData()
}


componentDidUpdate(prevProp, prevState){

if(prevState.currentPage!==this.state.currentPage){
this.fetchData()

}

}



selectSingleCharacter(x){

this.setState({selectedChar:x})

}


changePage(x){
if(this.state.currentPage>1 && this.state.currentPage<42)
this.setState({currentPage: this.state.currentPage+ x})
else if(this.state.currentPage===1 && x>0)
this.setState({currentPage: this.state.currentPage+ x})
else if(this.state.currentPage===42 && x<0)
 this.setState({currentPage: this.state.currentPage+ x})
}


selectPage(x){

this.setState({currentPage: x})

}

gotoHomepage(){

  this.setState({selectedChar:null})
}

  render() { 
    
    return (  

      <div className="app">
{!this.state.selectedChar && <Homepage selectPage={this.selectPage} currentPage= {this.state.currentPage} changePage={this.changePage} selectSingle={this.selectSingleCharacter} data={this.state.data}/>}
{this.state.selectedChar && <SinglePage gotoHomepage={this.gotoHomepage} data={this.state.data.find(e=>e.id===this.state.selectedChar)}/>}

      </div>

    );
  }
}
 
export default App;
