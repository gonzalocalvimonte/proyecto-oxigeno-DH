import React, { Component } from 'react';

class PanelVerticalUsers extends Component {

  constructor(){
    super()
    this.state = {
     productos : []
    }
  }

   async componentDidMount(){
    try {
    let peticion = await fetch('http://localhost:3001/api/users')

    let respuesta = await peticion.json()

    let products = respuesta.data
    
    let productos = data => {this.setState({productos:data.data})}
    
    } catch(error) {
      console.log(error)
    }

  }
   render(){
    
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
     
  export default PanelVerticalUsers;