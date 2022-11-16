import React, { Component } from 'react';
import "./stylesSubcomponents/PanelLast.css"


class PanelLast extends Component{

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
    } catch(error) {
      console.log(error)
    }}

    render(){    
      let producto = this.state.products.filter(producto => producto.id === this.state.products.length - 1)
      return (
        
      <div id='lastProd'>

        <h2>ULTIMO PRODUCTO CARGADO</h2>
        <div >
        {producto.map(e =>
          <div id='lastContent'>
            
            <span># {e.id}</span>
            <img className='imagenProduct' src={e.image}/>
            <span className='pNombre'>{e.name}</span>
            <span className='pPrecio'>$ {e.price}</span>
          </div>
          )
        }
        </div>

      </div>
    )
  }}

export default PanelLast