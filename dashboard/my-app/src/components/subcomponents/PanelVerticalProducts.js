import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'name',
        headerName: 'Nombre del producto',
        width: 250,
        editable: true,
      },
      {
        field: 'price',
        headerName: 'Precio ($)',
        type: 'number',
        width: 300,
        editable: true,
      }
    ];

    return (
      <Box sx={{ height: 400, width: '40%'  }}>
        <DataGrid
          rows={this.state.products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    );
  }
  }
     
  export default PanelVerticalProducts;