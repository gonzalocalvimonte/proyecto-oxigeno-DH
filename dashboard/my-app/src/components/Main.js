import PanelDetail from './subcomponents/PanelDetail'
import PanelLast from './subcomponents/PanelLast'
import PanelVerticalConteiner from './subcomponents/PanelVerticalConteiner'
import React, { Component } from 'react';

class Main extends Component {

  constructor(){
    super()
    this.state = {
     products : [],
     users : []
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
  }
 
  render(){

    let categories = this.state.products.map(producto => producto.category_id)
    let totalCategories = categories.filter((item,index)=>{
      return categories.indexOf(item) === index})
    console.log(this.state,totalCategories)
  return (
    <div >
        <PanelDetail title='Cantidad de productos' value={this.state.products}>
        <p>
          {this.state.products.length}
        </p>  
        </PanelDetail>
        <PanelDetail title='Cantidad de usuarios' value='13213'>
        <p>
          {this.state.users.length}
        </p>
        </PanelDetail>
        <PanelDetail title='Cantidad de categorias' value='13213'>
        <p>
          {totalCategories.length}
        </p>
        </PanelDetail>

        <PanelLast/>

        <PanelVerticalConteiner/>
        
    </div>
  );
}}

export default Main;