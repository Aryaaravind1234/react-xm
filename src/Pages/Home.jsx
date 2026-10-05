import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 ,}}>

      <Typography variant="h3" sx={{ mb: 2 }}>
        Product Management System
      </Typography>

      <Typography variant="h6" sx={{ mb: 4 }}>
        Manages Products
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/add-product"
        sx={{ mr: 2 }}
      >
        Add Product
      </Button>

      <Button
        variant="outlined"
        component={Link}
        to="/products"
      >
        View Products
      </Button>

    </Box>
  )
}

export default Home