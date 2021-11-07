
import './App.css';
import React,{Component} from 'react'
class App extends Component{
  
  constructor(){
    
    super();
    this.state={
    
      data:[
        {
          "name":"Manasa",
          "location":"hyderad"
        },
        {
          "name":"Preethi",
          "location":"Hyderabad"
        },
        {
          "name":"Vasanth",
          "location":"warangal"
        },
        {
          "name":"Sailesh",
          "location":"pune"
        },
        {
          "name":"Aishwarya",
          "location":"warangal"
        },
      ]
    }
  }


  render(){
    const cont={
      width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"pink"
   
    }
    
    var th={
      paddingTop: 12,
    paddingBottom: 12,
    width: 200,
    textAlign: "center",
    backgroundColor:"blue",
    color: "black",
    }

   
    return (
      <div style={cont}>
        <Employee Details/>
        <table className="table">
          <tr>
          
            <th style={th}>Name</th>
            <th style={th} >Location</th>
          </tr>
          {this.state.data.map((item)=> <List data = {item}  />)}
          
        </table>
      </div>
    );
  }
}

class List extends Component{
  
  render(){
    var td={
      border: "1px solid #ddd",
    textAlign: "center",
    padding: "8px",
    }
    return(   
      
        
          
      <tr>
        <td style={td}>
          {this.props.data.name}
        </td >
        <td style={td}>{this.props.data.location}</td>
      </tr>
      
    )
    
  }
  
}


class Employee extends Component{
  
  render(){
    return(
      <div>
        <h1>Employee Name Details</h1>
      </div>
    )
  }
}


export default App