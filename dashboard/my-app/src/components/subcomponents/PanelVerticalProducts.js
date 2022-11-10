import React, { Component } from 'react';

class PanelVerticalProducts extends Component {

  constructor(props){
    super(props)
    this.state = {
     productos : []
    }
      }
 
  componentDidMount(){
    
  fetch('http://localhost:3000/api/list',{
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json'}),
    mode: 'no-cors'
  })
  .then(response => {response.json()})
  .then(data => {this.setState({productos:data.data})})
  .catch(e => {console.log(e)})
  }

   render(){
    console.log(this.state.productos)
   return (
      <div >
        <h2>Hola mundo!</h2>
        <ul>
         {this.state.productos.map(elemento => {
          <li>{elemento.name}</li>
         
         })}
        </ul>
        
         
         
      </div>
    )
          };
  }
     
  export default PanelVerticalProducts;