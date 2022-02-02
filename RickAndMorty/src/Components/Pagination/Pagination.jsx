import React from "react";
import "./pagination.scss"


class Pagination extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 

        paginationArr:[]
         }
    }

    buttons(){
      
        if(this.props.currentPage<=3){
              
              this.setState({paginationArr: [1, 2, 3, 4, 5]})
                }
              
                if(this.props.currentPage>3 && this.props.currentPage<40){
              
              this.setState({paginationArr:[this.props.currentPage-2, this.props.currentPage-1, this.props.currentPage, this.props.currentPage+1, this.props.currentPage+2]})
              
                }
              
              
                if(this.props.currentPage>=40){
              
              this.setState({paginationArr: [38, 39, 40, 41, 42]})
              
                }
              
              }



      componentDidMount(){

        this.buttons()
      }

      componentDidUpdate(prevProp, prevState){

if(prevProp.currentPage!==this.props.currentPage)
this.buttons()
      }


    render() { 
        return ( <div className="pagination">
            <div className="buttons">
<button className="change" onClick={()=>this.props.changePage(-1)}>prev</button>
{this.state.paginationArr.map((e,i)=> <button key={i} onClick={()=>this.props.selectPage(e)}>{e}</button>)}
<button className="change" onClick={()=>this.props.changePage(1)}>next</button>
</div>
<div className="buttonsagain">
  <button onClick={()=>this.props.selectPage(1)}>First page</button>
  <button onClick={()=>this.props.selectPage(42)}>Last page</button>
</div>
        </div> );
    }
}
 
export default Pagination;