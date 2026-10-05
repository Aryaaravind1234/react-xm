import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../api/apiService'

function AddProduct() {

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addProduct(product)

    navigate('/products')
  }

  return (
    <Box  component="form" onSubmit={handleSubmit}  sx={{maxWidth: 500, margin: '40px auto',p: 3}}
    >

      <Typography variant="h4" sx={{ mb: 3 }}>
        Add Product
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={product.name}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Price"
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Category"
        name="category"
        value={product.category}
        onChange={handleChange}
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
      >
        Add Product
      </Button>

    </Box>
    
  )
}

export default AddProduct