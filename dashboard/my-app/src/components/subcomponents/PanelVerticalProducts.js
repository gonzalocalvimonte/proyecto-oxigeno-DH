import React, { Component } from 'react';

class PanelVerticalProducts extends Component {

  constructor(){
    super()
    this.state = {
     products : []
    }
  }

   async componentDidMount(){
    try {
    let peticion = await fetch('http://localhost:3000/api/list')

    let respuesta = await peticion.json()

    
    
    this.setState({products:respuesta.data})
    
    console.log(this.state)
    } catch(error) {
      console.log(error)
    }

    
  }
   render(){
    
   return (
      <div >
        <h2>Somos los productos</h2>
        <ul>
          {this.state.products.map(e => 
          <li>
           <p>{e.name}</p>
           <p>{e.price}</p>
           <p>{e.image}</p>
           <picture>
            <img src={'./images/Uploads/products/<% %>' + e.image}/>
           </picture>
           </li>
           )}
          
        </ul>
        
         
         
      </div>
    )
          };
  }
     
  export default PanelVerticalProducts;