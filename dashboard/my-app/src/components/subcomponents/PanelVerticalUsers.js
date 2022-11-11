import React, { Component } from 'react';

class PanelVerticalUsers extends Component {

  constructor(){
    super()
    this.state = {
     usuarios : []
    }
  }

   async componentDidMount(){
    try {
    let peticion = await fetch('http://localhost:3000/api/users')

    let respuesta = await peticion.json()

    
    
    this.setState({usuarios:respuesta.data})
    
    console.log(this.state)
    } catch(error) {
      console.log(error)
    }

    
  }
   render(){
    
   return (
      <div >
        <h2>Somos los usuarios</h2>
        <ul>
          {this.state.usuarios.map(e => 
           <li>
           <p>{e.id}</p>
           <p>{e.nombre}</p>
           </li>
           )}
          
        </ul>
        
         
         
      </div>
    )
          };
  }
     
  export default PanelVerticalUsers;