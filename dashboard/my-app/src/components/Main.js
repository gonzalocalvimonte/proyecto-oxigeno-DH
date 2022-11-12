import PanelDetail from './subcomponents/PanelDetail'
import PanelLast from './subcomponents/PanelLast'
import PanelVerticalConteiner from './subcomponents/PanelVerticalConteiner'
import React, { Component } from 'react';

class Main extends Component {

  constructor(){
    super()
    this.state = {
     products : [],
     users : [],
     categories:[]
    }
  }

 

  async componentDidMount(){
    try {
    let peticion = await fetch('http://localhost:3000/api/users')
    let respuesta = await peticion.json()
    this.setState({users:respuesta.data})
      
    
    } catch(error) {
      console.log(error)
    }
    
    try {
    let peticion = await fetch('http://localhost:3000/api/list')
    let respuesta = await peticion.json()
    this.setState({products:respuesta.data})
      
    
    } catch(error) {
      console.log(error)
    }
  
    try {
      let peticion = await fetch('http://localhost:3000/api/categories/index')
      let respuesta = await peticion.json()
      this.setState({categories:respuesta.data})
        
      
      } catch(error) {
        console.log(error)
      }
  }
 
  render(){

   
    console.log(this.state)
  return (
    <div >
        <PanelDetail title='Cantidad de productos' >
        <p>
          {this.state.products.length}
        </p>  
        </PanelDetail>
        <PanelDetail title='Cantidad de usuarios'>
        <p>
          {this.state.users.length}
        </p>
        </PanelDetail>
        <PanelDetail title='Cantidad de categorias' >
        <p>
          {this.state.categories.length}
        </p>
        </PanelDetail>

        <PanelLast/>

        <PanelVerticalConteiner/>
        
    </div>
  );
}}

export default Main;