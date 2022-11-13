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
        headerName: 'Nombre de la categoría',
        width: 250,
        editable: true,
      },
      {
        field: 'count',
        headerName: 'Cantidad de productos',
        type: 'number',
        width: 300,
        editable: true,
      }
    ];

    return (


      <Box sx={{ height: 400, width: '40%'  }}>
        <DataGrid Categorías
          rows={this.state.categories}
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
        
         
         
    
     
  export default PanelVerticalCategories;