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

        <h2>Ultimo producto agregado</h2>
        <div id='lastContent'>
        {producto.map(e =>
          <div>
            <p>{e.name}</p>
            <p>$ {e.price}</p>
          </div>
          )
        }
        </div>

      </div>
    )
  }}

export default PanelLast