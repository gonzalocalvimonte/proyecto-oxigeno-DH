import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './stylesSubcomponents/PanelVerticalProducts.css'
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
    
    // console.log(this.state)
    } catch(error) {
      console.log(error)
    }
  }

  render(){
    const rows = this.state.products.map(x => {
      x = {
      id: x.id,
      name: x.name,
      price: x.price,
      image:x.image
      }
      return x
    }
    )
      
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
        field: 'image',
        headerName: 'Imagen',
        width: 100,
        renderCell: (params) => <img className='imgProduct' src={params.value}/>     
      },
      {
        field: 'name',
        headerName: 'Nombre del producto',
        width: 400,
      },
      {
        field: 'price',
        headerName: 'Precio ($)',
        type: 'number',
        width: 150,
      }
    ];

    return (
      <Box sx={{ height: 372, width: '40%'  }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}  
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    );
  }
}
export default PanelVerticalProducts;