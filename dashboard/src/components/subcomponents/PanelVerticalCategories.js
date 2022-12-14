import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


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
    
    // console.log(this.state)
    } catch(error) {
      console.log(error)
    }

    
  }
   render(){
    const rows = this.state.categories.map(x => {
      x = {
        id: x.id,
        name: x.name,
        products: x.products.length
      }
      return x
    })
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
        field: 'name',
        headerName: 'Nombre de la categoría',
        width: 400,
      },
      {
        field: 'products',
        headerName: 'Cantidad de productos',
        type: 'number',
        width: 250,
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
        
export default PanelVerticalCategories;