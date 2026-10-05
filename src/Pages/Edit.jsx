import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, updateProduct as updateProductApi } from '../api/apiService'
import { useDispatch } from 'react-redux'
import { updateProduct as updateProductAction } from '../redux/productSlice'

function Edit() {

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: ''
  })

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res.data)
    })
  }, [id])

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await updateProductApi(id, product)

    dispatch(updateProductAction(res.data))

    navigate('/products')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: '40px auto',
        p: 3
      }}
    >

      <Typography variant="h4" sx={{ mb: 3 }}>
        Edit Product
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
        Update Product
      </Button>

    </Box>
  )
}

export default Edit