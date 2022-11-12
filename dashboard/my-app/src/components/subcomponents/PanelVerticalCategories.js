import React, { Component } from 'react';

class PanelVerticalCategories extends Component {

  constructor(){
    super()
    this.state = {
     categories : []
    }
  }

   async componentDidMount(){
    try {
    let peticion = await fetch('http://localhost:3000/api/categories/index')

    let respuesta = await peticion.json()

    
    
    this.setState({categories:respuesta.data})
    
    console.log(this.state)
    } catch(error) {
      console.log(error)
    }

    
  }
   render(){
    
   return (
      <div >
        <h2>Somos las categorias</h2>
        <ul>
          {this.state.categories.map(e => 
           <li>
           
           <p>{e.name} : {e.products.length}</p>
           </li>
           )}
          
        </ul>
        
         
         
      </div>
    )
          };
  }
     
  export default PanelVerticalCategories;